import type { NextPage } from 'next'
import HeaderImage from '../components/HeaderImage'
import Image from '../components/Image'
import resume from '../lib/content'

const Engagement: NextPage = () => {
  return (
    <>
      <HeaderImage src="/img/dickinson.webp" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary">Engagement</h1>

        <p>
          By doing public engagement and outreach, scientists and communities
          can come together to learn from each other and better understand the
          ecosystems and spaces that they both love. From national initiatives
          such as Save the Frogs Day, Skype a Scientist, and Letters to a
          Pre-scientist to local programs such as 4H Extension activities,
          BioBlitzes, Science Cafes, or nature centers and museums, I have been
          involved in multiple opportunities that allowed me to talk about
          ecology and science with children, parents, and the general public.
        </p>

        <div className="is-flex is-flex-direction-row is-flex-wrap-wrap mt-6 gallery">
          {resume.outreach?.map((o) => (
            <Image
              key={o.event}
              previewSize="256"
              alt={o.image.caption}
              {...o.image}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Engagement
