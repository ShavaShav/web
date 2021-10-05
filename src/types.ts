import { IconDefinition } from "@fortawesome/fontawesome-common-types"

export type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type Skill = 'robotics' | 'devops' | 'tdd' | 'bdd' | 'algorithms' | 'networking' | 'rest' | 'frontend' | 'backend' | 'concurrent' | 'agile' | 'testing' | 'qa'
export type Language = 'java' | 'javascript' | 'typescript' | 'python' | 'c' | 'bash' | 'cplusplus' | 'html' | 'css'
export type Database = 'postgresql' | 'mysql' | 'neo4j' | 'realm' | 'sqlserver'
export type Tool =  'selenium' | 'docker' | 'cucumber' | 'gradle' | 'birt' | 'tomcat' | 'jenkins' | 'node' | 'aws' | 'gimp' | 'heroku' | 'jira' | 'nginx' | 'npm' | 'oracle' | 'slack'
export type Framework = 'liferay' | 'odoo' | 'firebase' | 'qt'
export type Library =  'jquery' | 'react' | 'reactnative' | 'express' | 'jest' | 'redux' | 'sequelize'
export type Platform = 'android' | 'ios' | 'windows' | 'macos' | 'linux' | 'browser'

export type CategoryData = {
  name: string,
  image?: string,
  icon?: IconDefinition
}

export type Link = {
  type: 'google_play' | 'executable' | 'website' | 'source_code' | 'docs'
  url: string,
  text?: string,
}

export type Record = {
  type: 'work' | 'project'
  title: string,
  summary: string,
  bullets: string[],
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