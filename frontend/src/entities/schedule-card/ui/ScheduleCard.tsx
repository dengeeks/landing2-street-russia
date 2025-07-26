'use client'
import styles from './ScheduleCard.module.css'
import Image from 'next/image'
import { getImageUrl } from '@/shared/utils/getImageUrl'
import EditableTextBlock from '@/shared/ui/EditableTextBlock'
import Icon from '@/shared/icon'
import ScrollHint from '@/shared/ui/ScrollHint'
import { chunkArray } from '../model/chunkArray'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import type { ModeratorType } from '@/shared/api/type'

interface ScheduleCardProps {
  text: string
  speakers: ModeratorType[]
  isActive: boolean
  onToggle: () => void
}

const ScheduleCard = ({ text, speakers = [], isActive, onToggle }: ScheduleCardProps) => {
  const groupedSpeakers = speakers.length > 0 ? chunkArray(speakers, 3) : []

  return (
    <div className={styles.scheduleTableCell}>
      <EditableTextBlock
        variant="none"
        text={isActive || text.length <= 200 ? text : text.slice(0, 200) + '...'}
      />

      {text.length > 200 && (
        <button type="button" className={styles.scheduleMoreBtn} onClick={onToggle}>
          {isActive ? 'Скрыть' : 'Подробнее'}
          <Icon icon="chevron" className={isActive ? 'bottom' : ''} width={16} height={16} />
        </button>
      )}
      <div>
        {speakers?.length > 3 && <ScrollHint />}
        {groupedSpeakers?.length > 0 && (
          <Swiper slidesPerView={1} grabCursor>
            {groupedSpeakers.map((group, groupIndex) => (
              <SwiperSlide key={groupIndex} className={styles.scheduleSpeakerList}>
                {group.map((speaker, i) => (
                  <div className={styles.scheduleSpeaker} key={i}>
                    <Image
                      src={getImageUrl(
                        '/back_media/uploads/participant/fc142fdd-6caa-49d4-8c60-40778b327124/Text_input21.jpeg'
                      )}
                      width={75}
                      height={75}
                      alt={speaker.fio}
                      className={styles.scheduleSpeakerImageImg}
                      sizes="(max-width: 768px) 60px, 75px"
                    />
                    <div>
                      <div className={styles.scheduleSpeakerName}>{speaker.fio}</div>
                      <span className={styles.scheduleSpeakerPosition}>{speaker.type}</span>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ScheduleCard
