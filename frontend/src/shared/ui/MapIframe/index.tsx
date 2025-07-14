"use client"
import { extractIframeSrc } from '@/shared/utils/extractIframeSrc';
import { IframeHTMLAttributes } from 'react'

interface MapIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  title?: string;
}

const MapIframe = ({ src, title = 'Карта', ...rest }: MapIframeProps) => {
  const iframeSrc = extractIframeSrc(src || '');
  return (
    <iframe
      src={iframeSrc}
      title={title}
      loading="lazy"
      allowFullScreen
      aria-label={title}
      style={{ border: 0, display: 'block' }}
      width="100%"
      height="100%"
      {...rest}
    />
  );
};

export default MapIframe;
