import { DOCKER_API_BASE_URL, PUBLIC_API_BASE_URL } from '@/shared/settings'

const API_VERSION_PREFIX = '/api/v1/';

const PUBLIC_API_URL = PUBLIC_API_BASE_URL + API_VERSION_PREFIX;
const DOCKER_API_URL = DOCKER_API_BASE_URL + API_VERSION_PREFIX;

// универсальный конкатенатор
export const getApiUrl = (endpoint: string, ssr: boolean = true): string => {
  return (ssr ? DOCKER_API_URL : PUBLIC_API_URL) + endpoint;
};
