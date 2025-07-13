from rest_framework import serializers

from tours.models.social import SocialLink, SocialMedia


class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = ['name', 'image']


class SocialLinkSerializer(serializers.ModelSerializer):
    social_media = SocialMediaSerializer()

    class Meta:
        model = SocialLink
        fields = ['url', 'social_media']
