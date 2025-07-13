'use client'
import './GenreTags.css'
import type { DisciplinesType } from '@/widgets/streets/api/type'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { chunkArray } from '../../model/chunkArray'
import Icon from '@/shared/icon'

interface GenreTagsType {
  genres: DisciplinesType[]
}

const GenreTags = ({ genres }: GenreTagsType) => {
  const groupedGenres = chunkArray(genres, 5)

  return (
    <div className="genre-tags-swiper">
         <span className="genre-tags-help">
              <Icon icon="scroll" width={18} height={21} />
              Вы можете пролистать список направлений
            </span>
      <Swiper slidesPerView={1}>
        {groupedGenres.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="genre-tags" style={{ display: 'flex', gap: '10px' }}>
              {group.map((genre, index) => (
                <div
                  key={index}
                  className={`genre-tags__item genre-tags__item--${index} dashed-all`}
                  title={genre.title}
                  style={{ flex: '1 1 0' }}
                >
                  {genre.title.length > 12 ? genre.title.slice(0, 12) + '…' : genre.title}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default GenreTags
