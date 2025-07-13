import styles from './MarqueeText.module.css'

interface MarqueeTextProps {
  singleText?: string;
  grayText?: string;
  blackText?: string;
}

const MarqueeText = ({ blackText = 'у тебя всё получится', grayText = 'улицы начинаются с тебя'}: MarqueeTextProps) => {
  const renderMarquee = (text: string, className: string, repeatCount: number) => (
    <div className={`${styles.line} ${className}`}>
      <div className={styles.marqueeInner}>
        <span className={styles.marquee1}>{(text + ' ').repeat(repeatCount)}</span>
        <span className={styles.marquee2}>{(text + ' ').repeat(repeatCount)}</span>
      </div>
    </div>
  );

  return (
    <section className={styles.wrapper}>
      {renderMarquee(grayText, styles.lineGray, 10)}
      {renderMarquee(blackText, `${styles.lineBlack} dashed-y`, 10)}
    </section>
  );
};

export default MarqueeText;