from rest_framework import serializers

from regions.models.region import City, Region


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['id', 'name', 'code']


class CitySerializer(serializers.ModelSerializer):
    region = RegionSerializer()

    class Meta:
        model = City
        fields = ['id', 'name', 'region']
