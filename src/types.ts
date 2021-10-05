export type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type Skill = 'hello' | 'goodbye'
export type Language = 'java' | 'javascript' | 'python' | 'c' | 'bash' | 'cplusplus'
export type Database = 'postgresql' | 'neo4j' | 'mysql' | 'sqlserver'
export type Framework = 'odoo'
export type Library = 'react' | 'react-native'
export type Platform = 'desktop' | 'mobile'

export type CategoryData = {
  name: string,
  image: string
}

export type Link = {
  type: 'google_play' | 'executable' | 'website', 
  url: string,
  text?: string,
}

export type Record = {
  type: 'work' | 'project'
  title: string,
  description: string,
  start: Date,
  end?: Date,
  logo: string,
  skills: Skill[],
  databases: Database[],
  languages: Language[],
  frameworks: Framework[],
  libraries: Library[],
  isDesktop?: boolean,
  isMobile?: boolean,
  links: Link[],
  // Project specific
  screenshot?: string,
  sourceCode?: string,
  docs?: string, 
  // Work specific
  employer?: string,
}

// export type Project = Record & {
//   screenshot?: string,
//   sourceCode?: string,
//   docs?: string, 
// }

// export type Work = Record & {
//   employer: string,
// }