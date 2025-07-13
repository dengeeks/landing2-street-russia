'use client'
import dynamic from 'next/dynamic'
import Loader from '@/shared/ui/Loader'

const Video = dynamic(() => import('./ui/Video'), {
  ssr: false,
  loading: () => <Loader />,
})

export default Video