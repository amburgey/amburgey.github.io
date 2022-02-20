import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import resume from '../lib/content'

import '../styles/globals.sass'

function MyApp({ Component, pageProps }: AppProps) {
  const r = useRouter()

  return (
    <>
      <Head>
        <title>{resume.name}</title>
        <meta name="description" content={resume.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav path={r.route} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
