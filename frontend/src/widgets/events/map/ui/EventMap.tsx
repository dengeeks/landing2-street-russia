'use client'

import Loader from '@/shared/ui/Loader'
import dynamic from 'next/dynamic'
import styles from "./EventMap.module.css"

const MapIframe = dynamic(() => import('@/shared/ui/MapIframe'), { ssr: false, loading: () => <Loader/>, });

interface EventMapProps {
  title: string;
  yandex_address: string;
}


const EventMap = ({title, yandex_address}:EventMapProps) => {
  return (
    <section className={`container section-spacing-top section-spacing-bottom ${styles.eventMapSection}`}>
      <MapIframe className={styles.eventMapIframe} src={yandex_address} title={title}/>
    </section>
  )
}

export default EventMap;