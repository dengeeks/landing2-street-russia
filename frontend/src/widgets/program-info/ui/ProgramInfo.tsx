'use client'
import './ProgramInfo.css'
import SectionTitle from '@/shared/ui/SectionTitle'
import { formatEventDayRange } from '@/shared/utils/formatDate'
import Link from 'next/link'
import { useHomeData } from '@/shared/context/home-data/useHomeDataContext'

const ProgramInfo = () => {
  const { place, target, target_audience, starting_date, ending_date } = useHomeData()
  return (
    <section className="program-info section-spacing-top" id="program">
      <div className="program-info__container container">
        <div className="program-info__header">
          <SectionTitle>Программа</SectionTitle>
          <Link href="/tour" className="red button white">
            вся программа
          </Link>
        </div>

        <div className="program-info__content">
          <div className="program-info__block dashed-all">
            <h3 className="program-info__subtitle">МЕСТО</h3>
            <p className="program-info__text">{place}</p>
          </div>
          <div className="program-info__block dashed-all">
            <h3 className="program-info__subtitle">ЦЕЛЕВАЯ АУДИТОРИЯ</h3>
            <p className="program-info__text">{target_audience}</p>
          </div>
          {starting_date && ending_date && (
            <div className="program-info__dates">
              <span className="program-info__dates-label">Даты проведения</span>
              <div className="program-info__dates-range">
                {formatEventDayRange(starting_date, ending_date)}
              </div>
            </div>
          )}

          <div className="program-info__block dashed-all">
            <h3 className="program-info__subtitle">ЦЕЛЬ</h3>
            <p className="program-info__text">{target}</p>
          </div>
        </div>
        <Link href="/tour"  className="red program-info__button white button">
          вся программа
        </Link>
      </div>
    </section>
  )
}

export default ProgramInfo
