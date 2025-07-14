'use client'
import styles from './Video.module.css'
import MediaSwitcher from '@/shared/ui/MediaSwitcher'
import { extractVideoId } from '@/shared/utils/extractVideoId'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'

const Video = () => {
  const { title, video_url2, image2, format_type2 } = useHomeData()
  return (
    <section className={`container ${styles.videoSection}`}>
      <div className={styles.videoContainer}>
        {format_type2 &&
          (format_type2 === 'image' ? (
            <MediaSwitcher
              type={format_type2}
              src={image2}
              alt={title}
              sizes="(min-width: 1240px) 1204px, calc(100vw - 32px)"
            />
          ) : (
            <MediaSwitcher type={format_type2} source={extractVideoId(video_url2 || '')} />
          ))}
      </div>
    </section>
  )
}

export default Video
