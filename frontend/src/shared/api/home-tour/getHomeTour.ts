import { HOME_TOUR } from '@/shared/api/endpoints'
import type { HomeTourType } from './type'
import { REVALIDATE_TOUR_TIME } from '@/shared/settings'

// заглушка при ошибке
export const EMPTY_HOME_TOUR: HomeTourType = {
  id: "",
  format_type: 'image',
  video_url: null,
  image: "",
  title: "",
  starting_date: "2025-07-16T06:00:00+03:00",
  ending_date: "2025-10-16T06:00:00+03:00",
  address: "",
  address_yandex: "",
  info_participant: "",
  moderator: [],
  participant: {
    id: "",
    social_links: [],
    created_at: "",
    updated_at: "",
    fio: "",
    email: "",
    phone: "",
    image: null,
    title: ""
  },
  gallery: [],
  place: "",
  target_audience: "",
  target: "",
  tour_activities: [],
  format_type2: "image",
  image2: "",
  video_url2: null,
}


export async function getHomeTour(): Promise<HomeTourType> {
  try {
    const res = await fetch(HOME_TOUR, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {revalidate: REVALIDATE_TOUR_TIME}
    });

    if (!res.ok) {
      return EMPTY_HOME_TOUR;
    }

    return await res.json();
  } catch {
    return EMPTY_HOME_TOUR;
  }
}
