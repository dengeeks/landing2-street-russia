import type { MediaFormatType, SocialLinkType, RegionType } from '@/shared/api/type'

export type LeaderType = {
  id: string;
  social_links: SocialLinkType[]
  created_at: string;
  updated_at: string;
  fio: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  title: string;
}

export type DetailTourType = MediaFormatType &{
  id: string;
  title: string;
  starting_date: string;
  ending_date: string;
  address: string;
  address_yandex: string;
  region: RegionType;
  info: string;
  leader: LeaderType;
};