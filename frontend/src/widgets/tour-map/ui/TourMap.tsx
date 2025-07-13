'use client'
import { CSSProperties, useRef } from 'react'
import styles from './TourMap.module.css'
import regionsPath from '../model/regions.json'
import SectionTitle from '@/shared/ui/SectionTitle'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'
import Icon from '@/shared/icon'
import { useTourMapPoints } from '../model/useTourMapPoints'

const TourMap = () => {
  const { tour_activities, title } = useHomeData()
  const svgRef = useRef<SVGSVGElement | null>(null)

  const points = useTourMapPoints(svgRef, tour_activities)

  return (
    <section className={`section-spacing-bottom section-spacing-top ${styles.tourMapSection}`} id="locations">
      <div className={`container ${styles.relativeWrapper}`}>
        <div className={`container ${styles.leftContent}`}>
          <SectionTitle>{title}</SectionTitle>
        </div>

        <div className={styles.mapWrapper}>
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1276 797"
          >
            {regionsPath.map(({ id, d }, index) => (
              <path d={d} key={index} id={id} className={styles.mapRegionPath} />
            ))}
          </svg>

          {/* Маркеры */}
          {points.map((point) => (
            <div
              key={point.id}
              className={styles.mapMarker}
              style={
                {
                  '--x': `${point.x}px`,
                  '--y': `${point.y}px`,
                } as CSSProperties
              }
            >
              <Icon icon="marker" width={32} height={40} />
              <div className={styles.label}>
                <div className={styles.city}>{point.city}</div>
                <div className={styles.date}>{point.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourMap
