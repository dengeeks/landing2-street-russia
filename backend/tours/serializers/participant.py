from rest_framework import serializers

from tours.models.participant import Participant, BlockParticipantGallery
from tours.serializers.social import SocialLinkSerializer


class ParticipantSerializer(serializers.ModelSerializer):
    social_links = SocialLinkSerializer(
        many = True
    )

    class Meta:
        model = Participant
        fields = '__all__'


class TourParticipantGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockParticipantGallery
        fields = ['image']
