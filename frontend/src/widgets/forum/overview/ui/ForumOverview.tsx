import styles from './ForumOverview.module.css'
import type { TourInfoType } from '@/shared/api/detail-tour/type'
import { formatEventDateRangeFull } from '@/shared/utils/formatDate'

const ForumOverview = ({title, target_audience, place, starting_date, target, ending_date}: TourInfoType) => {
  return (
    <section className={`container ${styles.overviewSection}`}>
      <h1 className={styles.forumTitle}>{title}</h1>
      <div className={styles.infoList}>
        <p className={styles.infoItem}>
          <strong>Место:</strong>
          <span>
            {place}
          </span>
        </p>
        <p className={styles.infoItem}>
          <strong>Когда:</strong>
          <span>{formatEventDateRangeFull(starting_date, ending_date)}</span>
        </p>
        <p className={styles.infoItem}>
          <strong>Целевая аудитория:</strong>
          <span>
              {target_audience}
          </span>
        </p>
        <p className={styles.infoItem}>
          <strong>Цель:</strong>
          <span>
            {target}
          </span>
        </p>
      </div>
    </section>
  )
}

export default ForumOverview
