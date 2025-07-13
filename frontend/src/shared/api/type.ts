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

