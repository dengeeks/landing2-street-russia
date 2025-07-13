'use client'
import './Banner.css'
import MediaSwitcher from '@/shared/ui/MediaSwitcher'
import Button from '@/shared/ui/Button'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'
import { formatEventMonthRange } from '@/shared/utils/formatDate'
import { extractVideoId } from '@/shared/utils/extractVideoId'

const Banner = () => {
  const {title, starting_date, ending_date, format_type, image, video_url} = useHomeData()
  return (
    <section className="banner">
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
      <div className="banner__inner container">
        <h1 className="banner__title section-title">{title}<br/><span className="banner__date">{formatEventMonthRange(starting_date, ending_date)}</span></h1>
        <Button className="compact red banner__button">Купить билет</Button>
      </div>
    </section>
  )
}

export default Banner
