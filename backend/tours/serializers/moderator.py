from rest_framework import serializers

from tours.models.moderator import Moderator
from tours.serializers.social import SocialLinkSerializer


class ModeratorSerializer(serializers.ModelSerializer):
    social_links = SocialLinkSerializer(
        many = True
    )

    class Meta:
        model = Moderator
        fields = '__all__'
