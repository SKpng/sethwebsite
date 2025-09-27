export interface Actor {
  name: string
  tagline: string
  bio: string
  location: string
  email: string
  phone?: string
  website?: string
  agent?: {
    name: string
    company: string
    email: string
    phone: string
  }
  socialMedia?: {
    instagram?: string
    twitter?: string
    linkedin?: string
    imdb?: string
  }
}

export interface Headshot {
  id: string
  src: string
  alt: string
  category: 'commercial' | 'theatrical' | 'character'
  photographer?: string
}

export interface DemoReel {
  id: string
  title: string
  src: string
  thumbnail: string
  duration: string
  type: 'film' | 'theater' | 'commercial'
  description?: string
}

export interface Credit {
  id: string
  title: string
  role: string
  type: 'film' | 'tv' | 'theater' | 'commercial'
  year: number
  director?: string
  production?: string
  theater?: string
  status: 'completed' | 'upcoming' | 'in-production'
}

export interface Training {
  id: string
  institution: string
  program: string
  instructor?: string
  year: number
  type: 'school' | 'workshop' | 'masterclass' | 'coaching'
}

export interface Skill {
  id: string
  name: string
  category: 'languages' | 'accents' | 'physical' | 'musical' | 'other'
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'fluent'
}

export interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  type: 'booking' | 'award' | 'news' | 'update'
  featured?: boolean
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  project?: string
  budget?: string
}
