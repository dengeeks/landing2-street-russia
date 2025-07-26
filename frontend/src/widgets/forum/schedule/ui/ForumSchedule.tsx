import styles from './ForumSchedule.module.css'
import ScheduleSwiper from './internal/ScheduleSwiper'
import type { ProgramDatesType } from '@/shared/api/detail-tour/type'

interface ForumScheduleProps {
  data: ProgramDatesType[];
}

const ForumSchedule = ({data}: ForumScheduleProps) => {
  return (
    <section className={`container section-spacing-bottom ${styles.scheduleSection}`}>
      {data.map((day, index) => (
        <div key={index} className={styles.scheduleDay}>
          <h2 className={styles.scheduleDayTitle}>{day.date}</h2>
          <div className={styles.scheduleTimeline}>
            {day.programs.map((time, timeIndex) => (
              <div key={timeIndex} className={styles.scheduleRow}>
                <div className={styles.scheduleTime}>{time.time}</div>
                <ScheduleSwiper data={time.items} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ForumSchedule
