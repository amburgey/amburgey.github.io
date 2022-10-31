import type { NextPage } from 'next'
import HeaderImage from '../components/HeaderImage'
import Button from '../components/Button'
import resume from '../lib/content'

const Home: NextPage = () => {
  return (
    <>
      <HeaderImage src="/img/rotacoast.jpg" />
      <main className="container mt-6">
        <h1 className="is-size-3 is-family-primary">{resume.name}</h1>
        <h2 className="is-size-5 is-family-primary">{resume.title}</h2>

        {resume.contact && (
          <div className="mt-6 buttons are-medium">
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

        <div className="mt-6">
          <p className="content">
            I am currently a quantitative ecologist with 
            the{' '}
            <a
              href="https://wdfw.wa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              Washington Department of Fish and Wildlife&apos;s
            </a>{' '}
            Wildlife Science Division, where I work on a variety of species and ecosystems within the state of Washington. Before that, I was a postdoctoral researcher with Dr. Sarah Converse in
            the{' '}
            <a
              href="http://depts.washington.edu/qcons/"
              target="_blank"
              rel="noreferrer"
            >
              Quantitative Conservation Lab
            </a>
            . This wonderful group is housed in the{' '}
            <a
              href="https://depts.washington.edu/wacfwru/"
              target="_blank"
              rel="noreferrer"
            >
              Washington Cooperative Fish and Wildlife Research Unit
            </a>{' '}
            at the University of Washington.
          </p>

          <p className="content">
            I am a quantitative ecologist with interests and passions that span
            disciplines and ecosystems. While I am broadly interested in
            understanding how factors (natural and anthropogenic) impact
            wildlife populations, I am particularly concerned with how this
            knowledge can lead to better species management and conservation. I
            study a variety of systems and questions, all unified by the use of
            population demographic models to allow for better resolution of the
            underlying ecological processes at work. My interests vary from
            species biogeography and community ecology to optimizing invasive
            species management.
          </p>

          <p className="content">
            I am also committed to revolutionizing myself, my field, and my
            institutions in order to become actively anti-racist and create just
            and equitable spaces for all who wish to participate and collaborate
            in knowledge production. I believe that meaningful and effective
            research, learning, and mentoring is integrally tied to justice,
            equity, diversity, and inclusion (JEDI).
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
