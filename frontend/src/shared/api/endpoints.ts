import { PUBLIC_API_BASE_URL, DOCKER_API_BASE_URL } from '@/shared/settings'

const API_VERSION_PREFIX = '/api/v1/';

const PUBLIC_API_URL = PUBLIC_API_BASE_URL + API_VERSION_PREFIX;
const DOCKER_API_URL = DOCKER_API_BASE_URL + API_VERSION_PREFIX;

// универсальный конкатенатор
const getApiUrl = (endpoint: string, ssr: boolean = true): string => {
  return (ssr ? DOCKER_API_URL : PUBLIC_API_URL) + endpoint;
};

export const MEDIA = getApiUrl(`media/`, true);
export const CONTACT = getApiUrl(`contact/`, true);

export const EMAIL_PHONE = getApiUrl(`email-phone/`, true);

export const HOME_TOUR = getApiUrl(`tour/`, false);
export const TOUR_DETAIL = getApiUrl(`detail/tour/`, true);

export const PARTNERS = getApiUrl(`list/partner/`, true);

export const STREET = getApiUrl(`street/`, true);
export const DISCIPLINE_LIST = getApiUrl(`list/discipline/`, true);

