import styles from './EventFullInfo.module.css'
import SectionTitle from '@/shared/ui/SectionTitle'
import RegionalLeaderCard from '@/entities/regional-leader-card'
import ActionButton from '@/features/action-buttons'
import { LeaderType } from '@/shared/api/detail-tour/type'
import EditableTextBlock from '@/shared/ui/EditableTextBlock'
import Link from 'next/link'

interface EventFullInfoProps {
  description: string;
  leader: LeaderType;
}

const EventFullInfo = ({description, leader}: EventFullInfoProps) => {
  return (
  <section className={`container section-spacing-top ${styles.eventFullInfoContainer}`}>
    <div className={styles.eventFullInfoContentWrapper}>
      <div className={styles.eventFullInfoDescriptionBlock}>
        <SectionTitle>Описание</SectionTitle>
        <div className={styles.eventFullInfoDescriptionContent}>
          <EditableTextBlock text={description} variant="none" className={styles.eventFullInfoDescriptionText}/>
        </div>
      </div>

      <RegionalLeaderCard {...leader}/>
    </div>

    <div className={styles.eventFullInfoActionsBlock}>
      <ActionButton type="button" className="outlined white">поддержать мероприятие</ActionButton>
      <Link href="/#registration" className="red button white">Купить билет</Link>
    </div>
  </section>

)
}

export default EventFullInfo
