import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

type DynamicWithPreload = ComponentType & {
  preload?: () => Promise<void>;
};

export const modalComponents: Record<string, DynamicWithPreload> = {
  'donating': dynamic(() => import('@/features/modal/donation-modal'), { ssr: false }),
};

