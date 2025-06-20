import styles from './MarqueeText.module.css'

interface MarqueeTextProps {
  repeatCount?: number;
  grayText?: string;
  blackText?: string;
}

const MarqueeText = ({ repeatCount = 10, blackText = "у тебя всё получится", grayText="улицы начинаются с тебя" }: MarqueeTextProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.line} ${styles.lineGray}`}>
        <span className={styles.marqueeText}>{grayText.repeat(repeatCount)}</span>
      </div>
      <div className={`${styles.line} ${styles.lineBlack} dashed-y`}>
        <span className={styles.marqueeText}>{blackText.repeat(repeatCount)}</span>
      </div>
    </section>
  )
}

export default MarqueeText
