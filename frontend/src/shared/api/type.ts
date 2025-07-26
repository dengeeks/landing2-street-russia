export type MediaFormatType = {
  format_type: 'video_url' | 'image' | null;
  video_url: string | null;
  image: string | null;
};

export type SocialLinkType = {
  url: string;
  social_media: {
    name: string;
    image: string;
  }
};

export type RegionType = {
  id: string;
  name: string;
  code: string;
}


export type ModeratorType = {
  id: string;
  social_links: SocialLinkType[];
  created_at: string;
  updated_at: string;
  fio: string;
  email: string;
  phone: string;
  image: string;
  type: string;
  desc: string;
}
