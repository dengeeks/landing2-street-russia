import { Suspense } from 'react'
import Loader from '@/shared/ui/Loader'

import Banner from '@/widgets/banner'
import ProgramInfo from '@/widgets/program-info'
import Partners from '@/widgets/partners'
import ParticipantsInfo from '@/widgets/participants-info'
import ModeratorsAndExperts from '@/widgets/moderators-and-experts'
import MediaAccreditation from '@/widgets/media-accreditation'
import Streets from '@/widgets/streets'
import Video from '@/widgets/video'
import TourMap from '@/widgets/tour-map'
import { HomeDataProvider } from '@/shared/context/home-data/HomeDataContext'
import { getHomeTour } from '@/shared/api/home-tour/getHomeTour'

export default async function Home() {
  const homeData = await getHomeTour()
  return (
    <HomeDataProvider homeData={homeData}>
      <Banner />
      <Suspense fallback={<Loader />}>
        <Streets />
      </Suspense>
      <TourMap />
      <Video />
      <ProgramInfo />
      <ParticipantsInfo />
      <ModeratorsAndExperts />
      <Suspense fallback={<Loader />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <MediaAccreditation />
      </Suspense>
    </HomeDataProvider>
  )
}
