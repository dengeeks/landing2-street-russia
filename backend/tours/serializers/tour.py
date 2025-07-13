from rest_framework import serializers

from regions.serializers.region import CitySerializer
from tours.models.tour import Tour, TourCityActivity
from tours.serializers.leader import LeaderSerializer
from tours.serializers.moderator import ModeratorSerializer
from tours.serializers.participant import ParticipantSerializer, TourParticipantGallerySerializer


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
    leader = LeaderSerializer()

    class Meta:
        model = Tour
        fields = [
            'id', 'format_type', 'video_url', 'image', 'title',
            'starting_date', 'ending_date', 'address',
            'address_yandex', 'info', 'leader'
        ]
