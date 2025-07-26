import './ScrollHint.css'
import Icon from '@/shared/icon'

interface ScrollHintProps {
  text?: string
  className?: string
}

const ScrollHint = ({ text = 'Вы можете пролистать список', className }: ScrollHintProps) => {
  return (
    <span className={`scroll-hint ${className}`}>
      <Icon icon="scroll" width={14} height={18} />
      {text}
    </span>
  )
}

export default ScrollHint
