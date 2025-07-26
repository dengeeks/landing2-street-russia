from rest_framework import serializers

from regions.serializers.region import CitySerializer
from tours.models.tour import Tour, TourCityActivity, Program, ProgramDate
from tours.serializers.moderator import ModeratorSerializer
from tours.serializers.participant import ParticipantSerializer, TourParticipantGallerySerializer


class ProgramSerializer(serializers.ModelSerializer):
    moderator = ModeratorSerializer(
        many = True,
    )

    class Meta:
        model = Program
        fields = ['id', 'description', 'start_time', 'moderator']


class ProgramDateSerializer(serializers.ModelSerializer):
    programs = serializers.SerializerMethodField()

    class Meta:
        model = ProgramDate
        fields = ['date', 'programs']

    def get_programs(self, obj):
        # Use prefetched programs, already ordered by start_time
        programs = obj.programs.all()  # No additional query since prefetched
        time_groups = {}
        for program in programs:
            start_time = program.start_time.strftime('%H:%M')
            if start_time not in time_groups:
                time_groups[start_time] = []
            time_groups[start_time].append(ProgramSerializer(program, context = self.context).data)

        return [
            {'time': time, 'items': programs}
            for time, programs in sorted(time_groups.items())  # Ensure consistent time ordering
        ]


class TourCityActivitySerializer(serializers.ModelSerializer):
    city = CitySerializer()

    class Meta:
        model = TourCityActivity
        fields = ['city', 'date']


class TourSerializer(serializers.ModelSerializer):
    moderator = ModeratorSerializer(many = True)
    participant = ParticipantSerializer()
    gallery = TourParticipantGallerySerializer(many = True)
    tour_activities = TourCityActivitySerializer(many = True)

    class Meta:
        model = Tour
        fields = [
            'id', 'format_type', 'video_url', 'image', 'title',
            'format_type2', 'video_url2', 'image2',
            'starting_date', 'ending_date', 'address',
            'address_yandex', 'info_participant',
            'moderator', 'participant', 'gallery', 'place', 'target_audience', 'target',
            'tour_activities'
        ]


class TourDetailSerializer(serializers.ModelSerializer):
    program_dates = serializers.SerializerMethodField()

    class Meta:
        model = Tour
        fields = [
            'id', 'format_type', 'video_url', 'image', 'title',
            'starting_date', 'ending_date', 'program_dates',
            'place', 'target_audience', 'target',
        ]

    def get_program_dates(self, obj):
        # Get all program dates for this forum
        program_dates = obj.programs.all()
        # Format dates to Russian month names
        russian_months = {
            1: 'января', 2: 'февраля', 3: 'марта', 4: 'апреля',
            5: 'мая', 6: 'июня', 7: 'июля', 8: 'августа',
            9: 'сентября', 10: 'октября', 11: 'ноября', 12: 'декабря'
        }
        return [
            {
                'date': f"{pd.date.day} {russian_months[pd.date.month]}",
                'programs': ProgramDateSerializer(pd, context = self.context).data['programs']
            }
            for pd in program_dates
        ]
