import { TOUR_DETAIL } from '@/shared/api/endpoints'
import type { DetailTourType } from './type'
import { REVALIDATE_TIME } from '@/shared/settings'

// заглушка при ошибке
export const EMPTY_TOUR_DETAIL: DetailTourType = {
  id: '91192112-085d-4148-a3e8-e7f3f673ac77',
  format_type: 'video_url',
  video_url: 'https://youtu.be/S6IVEhP-9yc?si=SE-KDj6Z6_OYi1oB',
  image: null,
  title: 'новая форма',
  starting_date: '2025-07-16T18:00:00+03:00',
  ending_date: '2025-07-30T06:00:00+03:00',
  address: 'ааааааааааааааааааааааааа',
  address_yandex: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A053e8bec16360105d500ae5b3acb569782ff3fb50cd8d080d9480bea8cfb389f&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
  region: {
    id: '19c1779c-0758-4f25-a6ca-c51b421c408a',
    name: 'Москва',
    code: '77'
  },
  info: '<p>ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа</p>',
  leader: {
    id: '15febef8-4803-49a0-a990-c6f780ccdd02',
    social_links: [],
    created_at: '2025-07-12T20:39:51.130263+03:00',
    updated_at: '2025-07-12T20:39:51.135069+03:00',
    fio: 'awdawdawd',
    email: 'k_kurmanov@list.ru',
    phone: '89235678990',
    address: '222222',
    image: '/back_media/uploads/leader/15febef8-4803-49a0-a990-c6f780ccdd02/6e3d4dbf-76bd-4472-bf82-1a2b261e94d7.jpg',
    title: 'Лидер какого то региона'
  }
}



export async function getDetailTour(): Promise<DetailTourType> {
  try {
    const res = await fetch(TOUR_DETAIL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      return EMPTY_TOUR_DETAIL;
    }

    return await res.json();
  } catch {
    return EMPTY_TOUR_DETAIL;
  }
}
