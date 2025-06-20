import { InputHTMLAttributes, TextareaHTMLAttributes, FC, } from 'react'
import styles from './FormField.module.css'

interface BaseProps {
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
  error?: string
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>

type FormFieldProps = InputProps | TextareaProps

const FormField: FC<FormFieldProps> = ({ label, name, placeholder, required = false, error, ...rest }) => {
  return (
    <div className={`${styles.wrapper} ${error ? styles.error : ''}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && '*'}
        </label>
      )}
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      {(error) && (
        <span className={styles.hint}>{error}</span>
      )}
    </div>
  )
}

export default FormField
