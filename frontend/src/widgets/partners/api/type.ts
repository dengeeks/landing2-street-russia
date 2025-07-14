import { PartnerType } from '@/entities/partner-card/model/type'

export type PartnerListType = {
  partner_type: string
  partners: PartnerType[]
}[]