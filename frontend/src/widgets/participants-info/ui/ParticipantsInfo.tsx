'use client'
import './ParticipantsInfo.css'
import SectionTitle from '@/shared/ui/SectionTitle'
import Image from 'next/image'
import ParticipantManagerCard from '@/entities/participant-manager-card'
import { getImageUrl } from '@/shared/utils/getImageUrl'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'

const ParticipantsInfo = () => {
  const { participant, info_participant, gallery } = useHomeData()
  return (
    <section className="participants-info container section-spacing-top" id="participants">
      <SectionTitle>участники</SectionTitle>

      <p className="participants-info__text">{info_participant}</p>

      <div className="participants-info__gallery">
        <ParticipantManagerCard {...participant}/>
        {(gallery.length > 0 ? gallery : new Array(4).fill(null)).map((image, index) => {
          const sizes =
            index === 0
              ? '(min-width: 1240px) 634px, (min-width: 768px) calc(50vw - 32px), calc(100vw - 32px)'
              : '(min-width: 1240px) 388px, (min-width: 768px) calc(33vw - 20px), calc(100vw - 32px)'

          return (
            <div key={index} className="participants-info__image-wrapper">
              <Image src={getImageUrl(image?.image)} alt={`Изображение участника ${index + 1}`} fill sizes={sizes} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ParticipantsInfo
