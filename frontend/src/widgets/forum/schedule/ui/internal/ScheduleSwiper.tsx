'use client'
import styles from './ScheduleSwiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { FreeMode, Navigation } from 'swiper/modules'
import Icon from '@/shared/icon'
import { useState } from 'react'
import ScheduleCard from '@/entities/schedule-card'
import type { ProgramItemType } from '@/shared/api/detail-tour/type'

interface ScheduleSwiperProps {
  data: ProgramItemType[]
}

const ScheduleSwiper = ({ data }: ScheduleSwiperProps) => {
  const [activeTextIndex, setActiveTextIndex] = useState<number | null>(null)

  const slidesCount = data.length
  return (
      <Swiper
        grabCursor
        freeMode
        spaceBetween={20}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: '.schedule-prev',
          nextEl: '.schedule-next'
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: slidesCount < 3 ? slidesCount : 3
          }
        }}
        className={styles.scheduleSwiper}
        >
        <div className={styles.scheduleArrow}>
          <div className={`schedule-prev ${styles.schedulePrev}`}>
            <Icon icon="arrow-swiper" width={24} height={24} />
          </div>
          <div className={`schedule-next ${styles.scheduleNext}`}>
            <Icon icon="arrow-swiper" width={24} height={24} className="top" />
          </div>
        </div>
        {data.map((des, desIndex) => (
          <SwiperSlide style={{ width: 'auto' }} key={desIndex}>
            <ScheduleCard
              text={des.description}
              speakers={des.moderator}
              isActive={activeTextIndex === desIndex}
              onToggle={() =>
                setActiveTextIndex(prev => (prev === desIndex ? null : desIndex))
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default ScheduleSwiper
