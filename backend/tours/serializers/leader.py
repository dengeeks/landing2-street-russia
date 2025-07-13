from rest_framework import serializers

from tours.models.participant import Participant
from tours.serializers.social import SocialLinkSerializer


class LeaderSerializer(serializers.ModelSerializer):
    social_links = SocialLinkSerializer(
        many = True
    )

    class Meta:
        model = Participant
        fields = '__all__'
