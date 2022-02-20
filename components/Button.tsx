import { FC, ReactElement } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  href: string
  icon?: ReactElement
  label: string
}

const Button: FC<Props> = ({ className, href, icon, label }) => {
  return (
    <a
      className={clsx(
        'button has-text-weight-semibold valign-middle',
        className
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <span className="icon is-large mr-1">{icon}</span>} {label}
    </a>
  )
}

export default Button
