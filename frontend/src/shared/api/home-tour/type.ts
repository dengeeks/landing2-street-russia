import type { MediaFormatType, SocialLinkType, RegionType, ModeratorType } from '@/shared/api/type'


export type ParticipantType = {
   id: string;
   social_links: SocialLinkType[];
   created_at: string;
   updated_at: string;
   fio: string;
   email: string;
   phone: string;
   image: string | null;
   title: string;
}


export type TourActivities = {
   city: {
      id: string;
      name: string;
      region: RegionType;
   }
   date: string;
}

export type HomeTourType = MediaFormatType & {
   id: string;
   title: string;
   starting_date: string;
   ending_date: string;
   address: string;
   address_yandex: string;
   info_participant: string;
   moderator: ModeratorType[];
   participant: ParticipantType;
   gallery: {
      image: string;
   }[];
   place: string;
   target_audience: string;
   target: string;

   format_type2: 'video_url' | 'image'
   video_url2: string | null;
   image2: string | null;

   tour_activities: TourActivities[];
}

