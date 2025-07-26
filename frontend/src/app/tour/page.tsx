import ForumOverview from '@/widgets/forum/overview'
import ForumSchedule from '@/widgets/forum/schedule'

import type { Metadata, ResolvingMetadata } from 'next'

import { getDetailTour } from '@/shared/api/detail-tour/getDetailTour'

export async function generateMetadata( _: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const [data, parentOpenGraph] = await Promise.all([
    getDetailTour(),
    parent.then((p) => p.openGraph),
  ]);

  return {
    title: data.title,
    openGraph: {
      ...parentOpenGraph,
      images: [
        {
          url: data.image || '/logo.webp',
          alt: data.title,
        },
      ],
      url: `/tour`,

    },
  }
}



export default async function TourDetailPage() {
  const tourData = await getDetailTour()
  return (
    <>
      <ForumOverview
        title={tourData.title}
        target_audience={tourData.target_audience}
        target={tourData.target}
        place={tourData.target}
        starting_date={tourData.starting_date}
        ending_date={tourData.ending_date}
      />
      <ForumSchedule data={tourData.program_dates}/>
    </>
  )
}
