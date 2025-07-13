from common.serializers import BaseExcludeSerializer
from contents.models.street import Street


class StreetSerializer(BaseExcludeSerializer):
    class Meta(BaseExcludeSerializer.Meta):
        model = Street