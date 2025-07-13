import styles from './BannerEvent.module.css'
import SectionTitle from '@/shared/ui/SectionTitle'
import MediaSwitcher from '@/shared/ui/MediaSwitcher'
import type { MediaFormatType } from '@/shared/api/type'
import { extractVideoId } from '@/shared/utils/extractVideoId'
import Link from 'next/link'
import { formatEventMonthRange } from '@/shared/utils/formatDate'

interface BannerEventProps extends MediaFormatType {
  title: string;
  starting_date: string;
  ending_date: string;
}

const BannerEvent = ({ format_type, image, video_url, title, starting_date, ending_date }: BannerEventProps) => {
  return (
    <section className={`section-spacing-bottom ${styles.eventBanner}`}>
      <div className={styles.eventBannerWrapper}>
        {format_type &&
          (format_type === 'image' ? (
            <MediaSwitcher
              type={format_type}
              src={image}
              alt={title}
              sizes="(min-width: 1240px) 1204px, calc(100vw - 32px)"
            />
          ) : (
            <MediaSwitcher type={format_type} source={extractVideoId(video_url || '')} />
          ))}
      </div>
      <div className={`container ${styles.eventBannerContent}`}>
        <SectionTitle>{title}<br/><span className={styles.eventBannerDate}>{formatEventMonthRange(starting_date, ending_date)}</span></SectionTitle>
        <Link href="/#registration" className={`red button white ${styles.eventBannerButton}`}>
          Купить билет
        </Link>
      </div>
    </section>
  )
}

export default BannerEvent
