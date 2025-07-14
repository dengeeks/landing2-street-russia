import { MEDIA } from '@/shared/api/endpoints'
import { REVALIDATE_TIME } from '@/shared/settings'
import type { MediaType } from './type'

// заглушка при ошибке
const EMPTY_MEDIA: MediaType = {
  title: "Аккредитация для СМИ",
  date: "до 22 октября 18:00",
  email: "info@streetrussia.ru",
  fio: "Елизавета Сырыгина"
};

export async function getMedia(): Promise<MediaType> {
  try {
    const res = await fetch(MEDIA, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      return EMPTY_MEDIA;
    }

    return await res.json();
  } catch {
    return EMPTY_MEDIA;
  }
}
