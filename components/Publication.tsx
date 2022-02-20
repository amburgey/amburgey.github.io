import { FC } from 'react'
import { Publication as P } from '../lib/types'

type Props = P & {
  showYear: boolean
}

const Publication: FC<Props> = ({
  title,
  authors,
  journal,
  link,
  published,
  press,
  showYear,
}) => {
  return (
    <li className="timeline-item">
      <h2 className="is-size-5 mb-3">{title}</h2>
      <h5 className="is-size-6 ml-4">
        {authors}.
        <a
          href={link}
          className="ml-2 is-link is-small button is-outlined valign-middle"
          target="_blank"
          rel="noreferrer"
        >
          {journal}, {published.getFullYear()}.
        </a>
      </h5>
      <h2 className={showYear ? 'pub-year' : 'is-hidden'}>
        {published.getFullYear()}
      </h2>
      {press && (
        <div className="mt-5">
          <span className="has-text-bold">Press on this paper:</span>
          <ul>
            {press.map((p) => (
              <li key={p.name}>
                <a
                  href={p.link}
                  className="ml-2 is-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
    </li>
  )
}

export default Publication
