from common.serializers import BaseExcludeSerializer
from contents.models.media import Media


class MediaSerializer(BaseExcludeSerializer):
    class Meta(BaseExcludeSerializer.Meta):
        model = Media
