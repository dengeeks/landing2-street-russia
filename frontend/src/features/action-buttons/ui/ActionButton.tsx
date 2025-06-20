'use client'
import Button, { ButtonProps } from '@/shared/ui/Button'
import useModal from '@/shared/store/modal'

const ActionButton = ({ children, ...rest }: ButtonProps) => {
  const { openModal } = useModal()

  const handleClick = () => {
    openModal('donating')
  }

  return (
    <Button type="button" onClick={handleClick} {...rest}>
      {children}
    </Button>
  )
}

export default ActionButton
