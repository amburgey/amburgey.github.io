import type { NextPage } from 'next'
import Button from '../components/Button'
import HeaderImage from '../components/HeaderImage'
import Image from '../components/Image'

import resume from '../lib/content'

const Contact: NextPage = () => {
  return (
    <>
      <HeaderImage src="/img/rotacoast.jpg" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary">Contact</h1>

        {resume.contact && (
          <div className="my-6 buttons are-medium">
            {resume.contact
              ?.filter((c) => c.icon)
              .map(({ name, link, color, icon }) => (
                <Button
                  key={`contact-${name}`}
                  className={color}
                  href={link}
                  icon={icon}
                  label={name}
                />
              ))}
          </div>
        )}

        {resume.links && (
          <>
            <h1 className="is-size-3 is-family-primary">Related Sites</h1>
            <p>
              Other interesting websites relevant to ecology, conservation, or
              collaborator&apos;s work
            </p>

            <ul className="my-6">
              {resume.links
                .filter((l) => l.image)
                .map(({ name, link, image }) => (
                  <li key={name} className="mt-4">
                    <div className="media">
                      {image && (
                        <div className="media-left">
                          <Image
                            previewSize="64"
                            alt={image.caption}
                            href={link}
                            {...image}
                          />
                        </div>
                      )}
                      <div className="media-content valign-middle h-full">
                        <a
                          href={link}
                          className="is-size-5"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {name}
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
      </main>
    </>
  )
}

export default Contact
