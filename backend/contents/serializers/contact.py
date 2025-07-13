from common.serializers import BaseExcludeSerializer
from contents.models.contact import ContactFooter, EmailPhoneFooter


class ContactFooterSerializer(BaseExcludeSerializer):
    class Meta(BaseExcludeSerializer.Meta):
        model = ContactFooter


class EmailPhoneFooterFooterSerializer(BaseExcludeSerializer):
    class Meta(BaseExcludeSerializer.Meta):
        model = EmailPhoneFooter
