import { Actor, Headshot, DemoReel, Credit, Training, Skill, NewsItem } from '@/types'

export const actorData: Actor = {
  name: "Seth Karallis",
  tagline: "Versatile Actor | London Based",
  bio: "Seth Karallis is a passionate and dedicated actor with a diverse range of theatrical and screen experience. Based in London, Seth brings authenticity and depth to every role, whether on stage or in front of the camera. With training from some of the UK's most respected institutions and a commitment to continuous growth, Seth is always ready to bring compelling characters to life.",
  location: "London, UK",
  email: "hello@sethkarallis.com",
  phone: "+44 7XXX XXX XXX",
  agent: {
    name: "Agent Name",
    company: "Talent Agency",
    email: "agent@talentagency.com",
    phone: "+44 20 XXXX XXXX"
  },
  socialMedia: {
    instagram: "@sethkarallis",
    twitter: "@sethkarallis",
    linkedin: "seth-karallis",
    imdb: "nm1234567"
  }
}

export const headshots: Headshot[] = [
  {
    id: "1",
    src: "/images/placeholder.svg",
    alt: "Seth Karallis - Commercial Headshot",
    category: "commercial",
    photographer: "Professional Photographer"
  },
  {
    id: "2",
    src: "/images/placeholder.svg",
    alt: "Seth Karallis - Theatrical Headshot",
    category: "theatrical",
    photographer: "Professional Photographer"
  },
  {
    id: "3",
    src: "/images/placeholder.svg",
    alt: "Seth Karallis - Character Headshot",
    category: "character",
    photographer: "Professional Photographer"
  },
  {
    id: "4",
    src: "/images/placeholder.svg",
    alt: "Seth Karallis - Professional Headshot",
    category: "theatrical",
    photographer: "Professional Photographer"
  }
]

export const demoReels: DemoReel[] = [
  {
    id: "1",
    title: "Theatrical Reel",
    src: "https://player.vimeo.com/video/123456789",
    thumbnail: "/images/placeholder.svg",
    duration: "2:30",
    type: "theater",
    description: "Showcasing dramatic range and emotional depth"
  },
  {
    id: "2",
    title: "Commercial Reel",
    src: "https://player.vimeo.com/video/987654321",
    thumbnail: "/images/placeholder.svg",
    duration: "1:45",
    type: "commercial",
    description: "Commercial and corporate work highlights"
  }
]

export const credits: Credit[] = [
  {
    id: "1",
    title: "The Merchant of Venice",
    role: "Bassanio",
    type: "theater",
    year: 2024,
    director: "Sarah Johnson",
    theater: "Royal Shakespeare Company",
    status: "completed"
  },
  {
    id: "2",
    title: "London Calling",
    role: "James",
    type: "film",
    year: 2024,
    director: "Michael Chen",
    production: "Independent Productions",
    status: "completed"
  },
  {
    id: "3",
    title: "The Office Chronicles",
    role: "Supporting Lead",
    type: "tv",
    year: 2023,
    director: "Emma Williams",
    production: "BBC Studios",
    status: "completed"
  },
  {
    id: "4",
    title: "Tech Innovation Ad",
    role: "Lead",
    type: "commercial",
    year: 2024,
    director: "Creative Agency",
    production: "Brand Campaign",
    status: "completed"
  },
  {
    id: "5",
    title: "Upcoming Feature",
    role: "Supporting Role",
    type: "film",
    year: 2025,
    director: "Director Name",
    production: "Production Company",
    status: "upcoming"
  }
]

export const training: Training[] = [
  {
    id: "1",
    institution: "Royal Academy of Dramatic Art",
    program: "Acting Diploma",
    instructor: "Various",
    year: 2022,
    type: "school"
  },
  {
    id: "2",
    institution: "The Actors Centre",
    program: "Meisner Technique Workshop",
    instructor: "John Smith",
    year: 2023,
    type: "workshop"
  },
  {
    id: "3",
    institution: "Voice Coaching",
    program: "Accent and Dialect Training",
    instructor: "Sarah Brown",
    year: 2023,
    type: "coaching"
  },
  {
    id: "4",
    institution: "Movement Studio",
    program: "Physical Theatre Intensive",
    instructor: "Maria Garcia",
    year: 2022,
    type: "masterclass"
  }
]

export const skills: Skill[] = [
  {
    id: "1",
    name: "British RP",
    category: "accents",
    proficiency: "fluent"
  },
  {
    id: "2",
    name: "American Standard",
    category: "accents",
    proficiency: "advanced"
  },
  {
    id: "3",
    name: "French",
    category: "languages",
    proficiency: "intermediate"
  },
  {
    id: "4",
    name: "Spanish",
    category: "languages",
    proficiency: "beginner"
  },
  {
    id: "5",
    name: "Guitar",
    category: "musical",
    proficiency: "intermediate"
  },
  {
    id: "6",
    name: "Stage Combat",
    category: "physical",
    proficiency: "advanced"
  },
  {
    id: "7",
    name: "Dance",
    category: "physical",
    proficiency: "intermediate"
  },
  {
    id: "8",
    name: "Driving License",
    category: "other",
    proficiency: "fluent"
  }
]

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Featured in London Theatre Review",
    content: "Seth's performance in 'The Merchant of Venice' received critical acclaim from London Theatre Review.",
    date: "2024-01-15",
    type: "news",
    featured: true
  },
  {
    id: "2",
    title: "New Film Project Announced",
    content: "Seth has been cast in an upcoming independent film set to begin production in Spring 2025.",
    date: "2024-12-01",
    type: "booking",
    featured: true
  },
  {
    id: "3",
    title: "Commercial Campaign Success",
    content: "The latest commercial campaign featuring Seth has reached over 2 million views across platforms.",
    date: "2024-11-20",
    type: "update"
  }
]
