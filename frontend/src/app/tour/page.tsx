import BannerEvent from '@/widgets/events/banner'
import EventFullInfo from '@/widgets/events/full-info'

import MarqueeText from '@/shared/ui/marquee-text'
import EventMap from '@/widgets/events/map'
import { getDetailTour } from '@/shared/api/detail-tour/getDetailTour'

export default async function TourDetailPage() {
  const detailData = await getDetailTour()

  return (
    <>
      <BannerEvent
        title={detailData.title}
        image={detailData.image}
        format_type={detailData.format_type}
        video_url={detailData.video_url}
        starting_date={detailData.starting_date}
        ending_date={detailData.ending_date}
      />
      <MarqueeText grayText="ул. Тухачевского 48Б кемерово " />
      <EventFullInfo description={detailData.info} leader={detailData.leader} />
      <EventMap title={detailData.address} yandex_address={detailData.address_yandex} />
    </>
  )
}
