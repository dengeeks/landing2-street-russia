export const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost';
export const DOCKER_API_BASE_URL = process.env.INTERNAL_DOCKER_API_URL || 'http://backend:8003';

const url = new URL(PUBLIC_API_BASE_URL);

export const remoteMediaPattern = {
    protocol: url.protocol.slice(0, -1) as 'http' | 'https',
    hostname: url.hostname,
    pathname: '/back_media/**',
};


export const REVALIDATE_TIME = parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || '86400', 10);
export const REVALIDATE_PARTNERS_TIME = parseInt(process.env.NEXT_PUBLIC_PARTNERS_TIME || '86400', 10);
export const REVALIDATE_TOUR_TIME = parseInt(process.env.NEXT_PUBLIC_TOUR_TIME || '86400', 10);