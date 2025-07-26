'use client'
import './TeamCard.css'
import Image from 'next/image'
import Icon from '@/shared/icon'
import type { ModeratorType } from '@/shared/api/type'
import { getImageUrl } from '@/shared/utils/getImageUrl'

interface TeamCardProps extends ModeratorType {
  isActive: boolean
  onClick: () => void
}

const TeamCard = ({
  isActive,
  onClick,
  fio,
  image,
  email,
  phone,
  desc,
  social_links,
  type
}: TeamCardProps) => {
  return (
    <article className="team-card" onClick={!isActive ? onClick : undefined}>
      {!isActive ? (
        <div className="team-card__preview">
          <div className="team-card__image-wrapper">
            <Image src={getImageUrl(image)} alt={fio} width={286} height={415} className="team-card__image" />
          </div>
          <div className="team-card__name">{fio}</div>
          <div className="team-card__position">{type}</div>
        </div>
      ) : (
        <div className="team-card__popup">
          <div className="team-card__popup-header">
            <div className="team-card__name">{fio}</div>
            <button onClick={onClick} className="team-card__close-button" aria-label="Закрыть" type="button">
              <Icon icon="close" width={16} height={16} />
            </button>
          </div>
          <p className="team-card__position">{desc}</p>
          <div className="team-card__contact-item">
            <span className="team-card__contact-label team-card__position">mail:</span>&nbsp;
            <span className="team-card__position">{email}</span>
          </div>
          <div className="team-card__position">{phone}</div>
          <div className="team-card__socials">
            {social_links.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <Image src={getImageUrl(social.social_media.image)} alt={`${social.social_media.name} ${fio}`} width={42} height={42}/>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default TeamCard
