import { Record as XRecord, CategoryData, Framework, Language, Library, Database } from './types'
import logoTTPowerGroup from './img/logos/ttpowergroup.png';
import logoIndepocket from './img/logos/indepocket.png';

const DEV_ICON_PATH = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const devIcon = (name: string) => `${DEV_ICON_PATH}/${name}/${name}-original.svg`

export const Databases: Record<Database, CategoryData> = {
  'postgresql': {
    'name': 'Postgres',
    'image': devIcon('postgresql'),
  },
  'mysql': {
    'name': 'MySQL',
    'image': devIcon('mysql'),
  },
  'sqlserver': {
    'name': 'SQL Server',
    'image': devIcon('microsoftsqlserver'),
  },
  'neo4j': {
    'name': 'Neo4J',
    'image': devIcon('neo4j'),
  },
}


export const Frameworks: Record<Framework, CategoryData> = {
  'odoo': {
    'name': 'Odoo',
    'image': devIcon('react'),
  },
}

export const Libraries: Record<Library, CategoryData> = {
  'react': {
    'name': 'React',
    'image': devIcon('react'),
  },
  'react-native' : {
    'name': 'React-Native',
    'image': devIcon('react-native')
  }
}

export const Languages: Record<Language, CategoryData> = {
  'javascript': {
    'name': 'Javascript',
    'image': devIcon('javascript')
  },
  'java' : {
    'name': 'Java',
    'image': devIcon('java')
  },
  'python' : {
    'name': 'Python',
    'image': devIcon('python')
  },
  'c' : {
    'name': 'C',
    'image': devIcon('c')
  },
  'cplusplus' : {
    'name': 'C++',
    'image': devIcon('cplusplus')
  },
  'bash' : {
    'name': 'Bash',
    'image': devIcon('bash')
  }
}

export const WorkRecords: XRecord[] = [
  {
    type: 'work',
    employer: 'T&T Power Group',
    title: 'Software Developer',
    description: 'Worked',
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoTTPowerGroup,
    skills: [],
    databases: ['postgresql'],
    languages: ['javascript','python'],
    libraries: ['react'],
    frameworks: ['odoo'],
    isDesktop: true,
    isMobile: true,
    links: [],
  },
  {
    type: 'project',
    title: 'Indepocket',
    description: 'Worked',
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoIndepocket,
    skills: [],
    databases: [],
    languages: [],
    libraries: ['react-native'],
    frameworks: [],
    isMobile: true,
    links: [
      {type: 'google_play', url: 'https://play.google.com/store/apps/details?id=com.shaver.indepocket'}
    ],
    screenshot: '',
    sourceCode: '',
    docs: '', 
  }
];

export const ProjectRecords: XRecord[] = [
  {
    type: 'project',
    title: 'Indepocket',
    description: 'Worked',
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoIndepocket,
    skills: [],
    languages: [],
    frameworks: ['react-native'],
    libraries: [],
    platforms: [],
    links: [],
    screenshot: '',
    sourceCode: '',
    docs: '', 
  }
];
