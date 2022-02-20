import { FC } from 'react'

type Props = {
  src: string
}

const HeaderImage: FC<Props> = ({ src }) => {
  return (
    <section
      className="hero is-medium"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url("${src}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-body" />
    </section>
  )
}

export default HeaderImage
