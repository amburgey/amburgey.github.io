/* eslint-disable @next/next/no-img-element */
import { FC, useState } from 'react'
import Img from 'next/image'
import clsx from 'clsx'
import { Image as I } from '../lib/types'

type Props = I & {
  alt: string
  previewSize: string
  href?: string
}

const Image: FC<Props> = ({ src, caption, alt, previewSize, href }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <figure
        className={clsx(
          'image cursor-pointer relative',
          `is-${previewSize}x${previewSize}`
        )}
        onClick={() => (href ? window.open(href) : setOpen(true))}
      >
        <img src={src} alt={alt} title={caption} />
      </figure>

      {!href && (
        <div className={clsx('modal', open && 'is-active')}>
          <div className="modal-background" onClick={() => setOpen(false)} />
          <div className="modal-content relative h-full my-6">
            <img src={src} alt={alt} className="w-full" />
            <p className="absolute bottom-0 p-4 has-background-dark has-text-white w-full">
              {caption}
            </p>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setOpen(false)}
          ></button>
        </div>
      )}
    </>
  )
}

export default Image
