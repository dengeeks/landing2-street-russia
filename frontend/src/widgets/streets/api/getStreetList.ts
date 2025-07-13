import { STREET } from '@/shared/api/endpoints'
import { REVALIDATE_TIME } from '@/shared/settings'
import type { StreetType } from './type'

// заглушка при ошибке
export const EMPTY_STREET: StreetType = {
    text: ''
};


export async function getStreetList(): Promise<StreetType> {
  try {
    const res = await fetch(STREET, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      return EMPTY_STREET;
    }

    return await res.json();
  } catch {
    return EMPTY_STREET;
  }
}
