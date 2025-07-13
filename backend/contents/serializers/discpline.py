from common.serializers import BaseExcludeSerializer
from contents.models.discipline import Discipline


class DisciplineSerializer(BaseExcludeSerializer):
    class Meta(BaseExcludeSerializer.Meta):
        model = Discipline
