import React from 'react'
import Image from 'next/image'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import styles from './styles.module.css'

interface IconProps {
  iconClasses?: string
  src: string | StaticImport
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
}

interface ButtonProps {
  text?: string
  type?: 'primary'
  onClick?: () => void
  btnClasses?: string
  textClasses?: string
  iconProps?: IconProps
  as?: any
}

const buttonColor = {
  primary: styles['btn-primary'],
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'primary',
  btnClasses = '',
  textClasses = '',
  iconProps = {
    src: '/arrow-right12x6.svg',
    width: 8,
    height: 12,
    iconClasses: '',
  },
  as: Component = 'button',
  ...props
}) => {
  return React.cloneElement(
    <Component
      className={`${styles.btn} ${buttonColor[type]} ${btnClasses}`}
      onClick={onClick}
      {...props}
    >
      <span className={`sans-body-small ${styles.span} ${textClasses}`}>
        {text}
      </span>
      <Image
        className={`${styles.icon} ${iconProps?.iconClasses}`}
        src={iconProps?.src}
        width={iconProps?.width}
        height={iconProps?.height}
        alt=""
      />
    </Component>,
  )
}

export default Button

export const Link = ({ ...props }): JSX.Element => {
  return <Button as="a" {...props} />
}
