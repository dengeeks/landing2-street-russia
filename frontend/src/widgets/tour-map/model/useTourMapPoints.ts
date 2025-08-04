import { RefObject, useEffect, useState } from 'react'
import type { TourActivityType, TourPointType } from './type'

export const useTourMapPoints = (
  svgRef: RefObject<SVGSVGElement | null>,
  tour_activities: TourActivityType[]
): { points: TourPointType[]; regionCodes: string[] } => {
  const [points, setPoints] = useState<TourPointType[]>([])
  const [regionCodes, setRegionCodes] = useState<string[]>([])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current

    const updatePoints = () => {
      if (!svgRef.current) return

      const svgRect = svg.getBoundingClientRect()
      const wrapper = svg.parentElement
      const wrapperRect = wrapper?.getBoundingClientRect()

      const offsetX = wrapperRect ? svgRect.left - wrapperRect.left : 0
      const offsetY = wrapperRect ? svgRect.top - wrapperRect.top : 0

      const viewBox = svg.viewBox.baseVal
      const scaleX = svgRect.width / viewBox.width
      const scaleY = svgRect.height / viewBox.height

      const regionMap = new Map<string, { regionCode: string; cities: { id: string; name: string; date: string }[] }>()
      tour_activities.forEach(({ city, date }) => {
        const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })

        if (!regionMap.has(city.region.code)) {
          regionMap.set(city.region.code, {
            regionCode: city.region.code,
            cities: [],
          })
        }

        regionMap.get(city.region.code)!.cities.push({
          id: city.id,
          name: city.name,
          date: formattedDate,
        })
      })

      const newPoints: TourPointType[] = []

      for (const [regionCode, data] of regionMap) {
        const pathEl = svg.querySelector(`#${CSS.escape(regionCode)}`) as SVGPathElement | null
        if (!pathEl) continue

        const bbox = pathEl.getBBox()
        const x = bbox.x + bbox.width / 2
        const y = bbox.y + bbox.height / 2

        newPoints.push({
          regionCode,
          x: x * scaleX + offsetX,
          y: y * scaleY + offsetY,
          cities: data.cities,
        })
      }

      setPoints(newPoints)
      setRegionCodes([...regionMap.keys()])
    }

    updatePoints()
    window.addEventListener('resize', updatePoints)
    return () => window.removeEventListener('resize', updatePoints)
  }, [tour_activities, svgRef])

  return { points, regionCodes }
}
