import BannerEvent from '@/widgets/events/banner'
import EventFullInfo from '@/widgets/events/full-info'

import MarqueeText from '@/shared/ui/marquee-text'
import EventMap from '@/widgets/events/map'

export default async function EventDetailPage() {
    return (
        <>
            <BannerEvent/>
            <MarqueeText grayText="ул. Тухачевского 48Б кемерово "/>
            <EventFullInfo/>
            <EventMap/>

        </>
    )
}
