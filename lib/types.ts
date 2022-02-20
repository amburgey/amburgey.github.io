import { ReactElement } from 'react'

export type Image = {
  src: string
  caption: string
}

export type Contact = {
  name: string
  link: string
  icon?: ReactElement
  image?: Image
  color?: string
}

export type Project = {
  name: string
  purpose?: string
  researchQuestions?: string[]
  summary: string
  image: Image
  start: Date
  end?: Date
}

export type Publication = {
  title: string
  authors: string
  journal: string
  link: string
  published: Date
  press?: Contact[]
}

export type Outreach = {
  event: string
  date: Date
  summary: string
  image: Image
}

export type Resume = {
  name: string
  title: string
  contact: Contact[]
  interests: string
  research: Project[]
  publications: Publication[]
  outreach: Outreach[]
  photos: Image[]
  links: Contact[]
}
