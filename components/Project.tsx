import { FC } from 'react'
import { RiQuestionnaireFill } from 'react-icons/ri'
import Image from './Image'
import ReactMarkdown from 'react-markdown'
import { Project as P } from '../lib/types'

type Props = P & {
  showYear: boolean
}

const Project: FC<Props> = ({
  name,
  purpose,
  researchQuestions,
  summary,
  image,
  start,
  end,
  showYear,
}) => {
  return (
    <li className="timeline-item">
      <div className="media">
        <div className="media-left">
          <Image previewSize="256" alt={image.caption} {...image} />
        </div>
        <div className="media-content">
          <h2 className="is-size-5 mb-3">{name}</h2>
          <h2 className="is-size-6 ml-4">
            {start.getFullYear()}
            &nbsp;&mdash;&nbsp;
            {end ? end.getFullYear() : 'Ongoing'}
          </h2>

          <h2 className="is-size-6 ml-4 mt-2 is-italic">{purpose}</h2>
          <div className="ml-4 mt-3 content fbox box">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>

          {researchQuestions && (
            <ul className="ml-4 mt-4">
              {researchQuestions.map((q, i) => (
                <li key={i} className="is-italic">
                  <span className="has-text-warning">
                    <RiQuestionnaireFill />
                  </span>{' '}
                  {q}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <h2 className={showYear ? 'pub-year' : 'is-hidden'}>
        {start.getFullYear()}
      </h2>
      <hr />
    </li>
  )
}

export default Project
