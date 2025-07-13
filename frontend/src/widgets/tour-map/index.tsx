'use client'
import dynamic from 'next/dynamic'
import Loader from '@/shared/ui/Loader'

const TourMap = dynamic(() => import('./ui/TourMap'), {
  ssr: false,
  loading: () => <Loader />,
})

export default TourMap