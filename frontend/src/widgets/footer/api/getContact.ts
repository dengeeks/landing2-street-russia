import { CONTACT } from '@/shared/api/endpoints'
import { REVALIDATE_TIME } from '@/shared/settings'
import type { ContactType } from './type'

// заглушка при ошибке
const EMPTY_CONTACT: ContactType[] = [
  {
    url: "https://google.com",
    image: "/back_media/uploads/contactfooter/1f19e1e4-5824-445e-8820-f0bb25c20b25/VKontakte.png"
  },
]

export async function getContact(): Promise<ContactType[]> {
  try {
    const res = await fetch(CONTACT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      return EMPTY_CONTACT;
    }

    return await res.json();
  } catch {
    return EMPTY_CONTACT;
  }
}
