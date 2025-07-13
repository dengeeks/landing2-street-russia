'use client'
import dynamic from 'next/dynamic'
import Loader from '@/shared/ui/Loader'

const ModeratorsAndExperts = dynamic(() => import('./ui/ModeratorsAndExperts'), {
  ssr: false,
  loading: () => <Loader />,
})

export default ModeratorsAndExperts