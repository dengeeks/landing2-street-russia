import { DISCIPLINE_LIST } from '@/shared/api/endpoints'
import { REVALIDATE_TIME } from '@/shared/settings'
import type { DisciplinesType } from './type'

// заглушка при ошибке
export const EMPTY_DISCIPLINE_LIST: DisciplinesType[] = [
  {
    title: ''
  }
]

export async function getDisciplines(): Promise<DisciplinesType[]> {
  try {
    const res = await fetch(DISCIPLINE_LIST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: REVALIDATE_TIME }
    })

    if (!res.ok) {
      return EMPTY_DISCIPLINE_LIST
    }

    return await res.json()
  } catch {
    return EMPTY_DISCIPLINE_LIST
  }
}
