import { RefObject, useEffect, useState } from 'react'

type TourActivity = {
  city: {
    id: string
    name: string
    region: {
      code: string
    }
  }
  date: string
}

type TourPoint = {
  id: string
  city: string
  date: string
  x: number
  y: number
}

export const useTourMapPoints = (
  svgRef: RefObject<SVGSVGElement | null>,
  tour_activities: TourActivity[]
): TourPoint[] => {
  const [points, setPoints] = useState<TourPoint[]>([])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current

    const updatePoints = () => {
      if (!svgRef.current) return

      const svgRect = svg.getBoundingClientRect()
      const viewBox = svg.viewBox.baseVal
      const scaleX = svgRect.width / viewBox.width
      const scaleY = svgRect.height / viewBox.height

      // Уникальные записи по region.code
      const seen = new Set<string>()
      const uniqueActivities = tour_activities.filter(({ city }) => {
        if (seen.has(city.region.code)) return false
        seen.add(city.region.code)
        return true
      })

      const newPoints = uniqueActivities.map(({ city, date }) => {
        const pathEl = svg.querySelector(`#${CSS.escape(city.region.code)}`) as SVGPathElement | null
        if (!pathEl) return null

        const bbox = pathEl.getBBox()
        const x = bbox.x + bbox.width / 2
        const y = bbox.y + bbox.height / 2

        return {
          id: city.id,
          city: city.name,
          date: new Date(date).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          }),
          x: x * scaleX,
          y: y * scaleY,
        }
      }).filter((point): point is TourPoint => point !== null)

      setPoints(newPoints)
    }

    updatePoints()
    window.addEventListener('resize', updatePoints)
    return () => window.removeEventListener('resize', updatePoints)
  }, [tour_activities, svgRef])

  return points
}
