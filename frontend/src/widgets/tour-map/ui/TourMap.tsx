'use client'
import { useRef, useState } from 'react'
import styles from './TourMap.module.css'
import regionsPath from '../model/regions.json'
import SectionTitle from '@/shared/ui/SectionTitle'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'
import { useTourMapPoints } from '../model/useTourMapPoints'
import RegionModal from './internal/RegionModal'
import { useMobileDetection } from '@/shared/hooks/useIsMobile'

const TourMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const { tour_activities, title } = useHomeData()

  const isMobile = useMobileDetection(1024)

  const svgRef = useRef<SVGSVGElement | null>(null)

  const { points, regionCodes } = useTourMapPoints(svgRef, tour_activities)


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
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1000 600">
            {regionsPath.map(({ id, d }, index) => (
              <path
                d={d}
                key={index}
                id={id}
                className={`${styles.mapRegionPath} ${
                  regionCodes.includes(id) ? styles.mapRegionWithEvent : ''
                }`}
                onMouseEnter={() => !isMobile && setActiveRegion(id)}
                onMouseLeave={() => !isMobile && setActiveRegion(null)}
                onClick={() => isMobile && setActiveRegion(prev => (prev === id ? null : id))}
              />
            ))}
          </svg>

          <RegionModal points={points} activeRegionCode={activeRegion}/>
        </div>
      </div>
    </section>
  )
}

export default TourMap
