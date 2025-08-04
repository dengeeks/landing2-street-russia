'use client'
import type { CSSProperties } from 'react'
import './RegionModal.css'
import type { TourPointType } from '../../model/type'

interface RegionModalProps {
  points: TourPointType[];
  activeRegionCode: string | null;
}

const RegionModal = ({ points, activeRegionCode }: RegionModalProps) => {
  const point = points.find(p => p.regionCode === activeRegionCode)

  if (!point || !activeRegionCode) return null

  return (
      <div
        className="region-modal"
        style={
          {
            '--x': `${point.x}px`,
            '--y': `${point.y}px`
          } as CSSProperties
        }>
        <div className="region-modal__content">
          {point.cities.map(city => (
            <div key={city.id} className="region-modal__city">
              <div className="region-modal__city-name">{city.name}</div>
              <div className="region-modal__city-date">{city.date}</div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default RegionModal
