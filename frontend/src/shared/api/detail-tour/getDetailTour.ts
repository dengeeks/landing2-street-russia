import { TOUR_DETAIL } from '@/shared/api/endpoints'
import type { DetailTourType } from './type'
import { REVALIDATE_TOUR_TIME } from '@/shared/settings'

// заглушка при ошибке
export const EMPTY_TOUR_DETAIL: DetailTourType = {
  id: '91192112-085d-4148-a3e8-e7f3f673ac77',
  format_type: 'image',
  video_url: '/logo.webp',
  image: null,
  title: 'string',
  starting_date: '2025-07-16T18:00:00+03:00',
  ending_date: '2025-07-30T06:00:00+03:00',
  place: "string",
  target_audience: "string",
  target: "string",
  program_dates: []
}


export async function getDetailTour(): Promise<DetailTourType> {
  try {
    const res = await fetch(TOUR_DETAIL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TOUR_TIME },
    });

    if (!res.ok) {
      return EMPTY_TOUR_DETAIL;
    }

    return await res.json();
  } catch {
    return EMPTY_TOUR_DETAIL;
  }
}
