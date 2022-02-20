import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import resume from '../lib/content'

type Props = {
  path: string
}

const Nav: FC<Props> = ({ path }) => {
  const toggleStyles = () => {
    document.querySelector('#burger')?.classList.toggle('is-active')
    document.querySelector('#navbarmenu')?.classList.toggle('is-active')
  }

  return (
    <>
      <nav
        className="navbar px-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item is-size-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/LogoSMA.png"
                alt="Logo"
                className="pr-2"
                style={{ height: '64px', maxHeight: 'unset' }}
              />
              {resume.name}
            </a>
          </Link>

          <a
            id="burger"
            onClick={toggleStyles}
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarmenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarmenu" className="navbar-menu has-text-weight-bold">
          <div className="navbar-end">
            <Link href="/research">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/research' && 'has-text-primary'
                )}
              >
                Research
              </a>
            </Link>
            <Link href="/publications">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/publications' && 'has-text-primary'
                )}
              >
                Publications
              </a>
            </Link>
            <Link href="/cv">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/cv' && 'has-text-primary'
                )}
              >
                CV
              </a>
            </Link>
            {/* <Link href="/jedi">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/jedi' && 'has-text-primary'
                )}
              >
                JEDI
              </a>
            </Link> */}
            <Link href="/engagement">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/engagement' && 'has-text-primary'
                )}
              >
                Engagement
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={clsx(
                  'navbar-item',
                  path === '/contact' && 'has-text-primary'
                )}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
