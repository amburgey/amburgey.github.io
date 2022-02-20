import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { FaFilePdf } from 'react-icons/fa'
import HeaderImage from '../components/HeaderImage'

const PDF = dynamic(() => import('../components/PDF'), {
  ssr: false,
})

const CV: NextPage = () => {
  return (
    <>
      <HeaderImage src="/img/dickinson.webp" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary is-flex">
          <span className="is-flex-grow-1">Curriculum Vitae</span>
          <a href="/pdf/cv.pdf" download className="button is-info">
            <span className="icon is-large mr-1">
              <FaFilePdf />
            </span>{' '}
            Download CV
          </a>
        </h1>

        <PDF src="/pdf/cv.pdf" className="w-90 center mt-6" />
      </main>
    </>
  )
}

export default CV
