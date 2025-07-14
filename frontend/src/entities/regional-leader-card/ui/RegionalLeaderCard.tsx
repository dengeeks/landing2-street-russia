import styles from './RegionalLeaderCard.module.css'
import Image from 'next/image'
import { getImageUrl } from '@/shared/utils/getImageUrl'
import type { LeaderType } from '@/shared/api/detail-tour/type'

const RegionalLeaderCard = ({ image, email, social_links, fio, title, address, phone }: LeaderType) => {
  return (
    <article className={styles.regionalLeaderCard}>
        <Image
          className={styles.regionalLeaderCardImage}
          src={getImageUrl(image || undefined)}
          alt="Фото представителя региона"
          width={286}
          height={249}
        />
      <div className={styles.regionalLeaderCardInfo}>
        <span className={styles.regionalLeaderCardTitle}>{title}</span>
        <span className={styles.regionalLeaderCardName}>
          {fio}
        </span>
        <div className={styles.regionalLeaderCardContacts}>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.regionalLeaderCardEmail}>
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.regionalLeaderCardPhone}>
            {phone}
          </a>
        </div>
        <address className={styles.regionalLeaderCardOffice}>Офис: {address}</address>
        <div className={styles.regionalLeaderCardSocials}>
          {social_links.map((social, i) => (
            <a
              href={social.url}
              key={i}
              className={styles.regionalLeaderCardSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              title={`${social.social_media.name} — ${fio}`}
            >
              <Image src={getImageUrl(social.social_media.image)} alt={`${social.social_media.name} — ${fio}`} width={30} height={30} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default RegionalLeaderCard
