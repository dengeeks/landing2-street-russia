export type TourActivityType = {
  city: {
    id: string
    name: string
    region: {
      code: string
    }
  }
  date: string
}

export type TourPointType = {
  regionCode: string
  x: number
  y: number
  cities: {
    id: string
    name: string
    date: string
  }[]
}
