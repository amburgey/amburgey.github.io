import type { NextPage } from 'next'
import Link from 'next/link'
import HeaderImage from '../components/HeaderImage'
import Project from '../components/Project'

import resume from '../lib/content'

const sortedResearch =
  resume.research?.sort((a, b) => {
    if (b.start.getFullYear() == a.start.getFullYear()) {
      if (b.end && a.end) {
        return b.end.getFullYear() - a.end.getFullYear()
      } else if (a.end) {
        return 1
      }
      return -1
    }
    return b.start.getFullYear() - a.start.getFullYear()
  }) || []

const Research: NextPage = () => {
  let year = 0

  return (
    <>
      <HeaderImage src="/img/dickinson.webp" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary">Research</h1>

        <p>
          Projects are listed chronologically and resulting manuscripts can be
          found on the{' '}
          <Link href="/publications">
            <a>Publications page.</a>
          </Link>
        </p>

        <ul className="mt-6 timeline">
          {sortedResearch.map((res) => {
            let showYear = false
            if (res.start.getFullYear() !== year) {
              showYear = true
              year = res.start.getFullYear()
            }

            return <Project key={res.name} {...res} showYear={showYear} />
          })}
        </ul>
      </main>
    </>
  )
}

export default Research
