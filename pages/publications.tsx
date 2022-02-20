import type { NextPage } from 'next'
import Button from '../components/Button'
import HeaderImage from '../components/HeaderImage'
import { Contact } from '../lib/types'

import resume from '../lib/content'
import Publication from '../components/Publication'

const rgate = resume.contact?.find((l) => l.name === 'ResearchGate') as Contact
const sortedPubs =
  resume.publications?.sort(
    (a, b) => b.published.getTime() - a.published.getTime()
  ) || []

const Publications: NextPage = () => {
  let year = 0

  return (
    <>
      <HeaderImage src="/img/dickinson.webp" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary">Publications</h1>

        <p>
          Published journal articles with links to downloadable copies of each.
          Most of these publications are also available via
          <Button
            className={`${rgate.color} ml-3`}
            href={rgate.link}
            icon={rgate.icon}
            label={rgate.name}
          />
        </p>

        <ul className="mt-6 timeline">
          {sortedPubs.map((pub) => {
            let showYear = false
            if (pub.published.getFullYear() !== year) {
              showYear = true
              year = pub.published.getFullYear()
            }

            return <Publication key={pub.title} {...pub} showYear={showYear} />
          })}
        </ul>
      </main>
    </>
  )
}

export default Publications
