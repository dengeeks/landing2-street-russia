import { EMAIL_PHONE } from '@/shared/api/endpoints'
import { REVALIDATE_TIME } from '@/shared/settings'
import type { EmailPhoneType } from './type'

// заглушка при ошибке
const EMPTY_EMAIL_PHONE: EmailPhoneType = {
  email: "info@streetrussia.ru",
  phone: "+7 (918) 752-55-17"
}

export async function getEmailPhone(): Promise<EmailPhoneType> {
  try {
    const res = await fetch(EMAIL_PHONE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      return EMPTY_EMAIL_PHONE;
    }

    return await res.json();
  } catch {
    return EMPTY_EMAIL_PHONE;
  }
}
