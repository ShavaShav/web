export type Skill = 'hello' | 'goodbye'
export type Language = 'hello' | 'goodbye'
export type Library = 'hello' | 'goodbye'
export type Framework = 'react' | 'react-native'
export type Platform = 'desktop' | 'mobile'

export type CategoryData = {
  name: string,
  image: string
}

export type Link = {
  type: 'google_play' | 'executable' | 'website', 
  url: string
}

export type Record = {
  title: string,
  description: string,
  start: Date,
  end?: Date,
  logo: string,
  skills: Skill[],
  languages: Language[],
  frameworks: Framework[],
  libraries: Library[],
  platforms: Platform[],
  links: Link[],
}

export type Project = Record & {
  screenshot?: string,
  sourceCode?: string,
  docs?: string, 
}

export type Work = Record & {
  employer: string,
}