import { CategoryData, Framework, Language, Library, Database, Skill, Tool } from './types'

import { 
  faNetworkWired, 
  faVial, 
  faRunning, 
  faChalkboardTeacher, 
  faRecycle, 
  faPuzzlePiece, 
  faPaperPlane, 
  faPalette, 
  faCogs, 
  faBezierCurve, 
  faSearch, 
  faDatabase,
  faRobot,
  faHardHat
} from '@fortawesome/free-solid-svg-icons'

import iconOdoo from './img/icons/odoo.png';
import iconLiferay from './img/icons/odoo.png';

const DEV_ICON_PATH = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const devIcon = (name: string) => `${DEV_ICON_PATH}/${name}/${name}-original.svg`
const devIconPlain = (name: string) => `${DEV_ICON_PATH}/${name}/${name}-plain.svg`

export const Tools: Record<Tool, CategoryData> = {
  selenium: {
    name: 'Selenium',
    image: devIcon('selenium'),
  },
  docker: {
    name: 'Docker',
    image: devIcon('docker'),
  },
  cucumber: {
    name: 'Cucumber',
    image: devIcon('cucumber'),
  },
  gradle: {
    name: 'Gradle',
    image: devIcon('gradle'),
  },
  birt: {
    name: 'BIRT',
    image: devIcon('birt'),
  },
  tomcat: {
    name: 'Tomcat',
    image: devIcon('tomcat'),
  },
  jenkins: {
    name: 'Jenkins',
    image: devIcon('jenkins'),
  },
  node: {
    name: 'Node',
    image: devIcon('node'),
  },
  aws: {
    name: 'AWS',
    image: devIcon('aws'),
  },
  gimp: {
    name: 'GIMP',
    image: devIcon('gimp'),
  },
  heroku: {
    name: 'Heroku',
    image: devIcon('heroku'),
  },
  jira: {
    name: 'Jira',
    image: devIcon('jira'),
  },
  nginx: {
    name: 'nginx',
    image: devIcon('nginx'),
  },
  npm: {
    name: 'npm',
    image: devIcon('npm'),
  },
  oracle: {
    name: 'Oracle',
    image: devIcon('oracle'),
  },
  slack: {
    name: 'Slack',
    image: devIcon('slack'),
  }
}

export const Skills: Record<Skill, CategoryData> = {
  devops: {
    name: 'DevOps',
    icon: faHardHat,
  },
  tdd: {
    name: 'TDD',
    icon: faRecycle,
  },
  bdd: {
    name: 'BDD',
    icon: faChalkboardTeacher,
  },
  algorithms: {
    name: 'Algorithms',
    icon: faPuzzlePiece,
  },
  networking: {
    name: 'Networks',
    icon: faNetworkWired,
  },
  rest: {
    name: 'REST',
    icon: faPaperPlane,
  },
  frontend: {
    name: 'Frontend',
    icon: faPalette,
  },
  backend: {
    name: 'Backend',
    icon: faCogs,
  },
  concurrent: {
    name: 'Concurrency',
    icon: faBezierCurve,
  },
  agile: {
    name: 'Agile',
    icon: faRunning,
  },
  robotics: {
    name: 'Robotics',
    icon: faRobot,
  },
  testing: {
    name: 'Testing',
    icon: faVial,
  },
  qa: {
    name: 'QA',
    icon: faSearch,
  },
}

export const Databases: Record<Database, CategoryData> = {
  mysql: {
    name: 'MySQL',
    image: devIcon('mysql'),
  },
  neo4j: {
    name: 'Neo4J',
    image: devIcon('neo4j'),
  },
  postgresql: {
    name: 'Postgres',
    image: devIcon('postgresql'),
  },
  sqlserver: {
    name: 'SQL Server',
    image: devIconPlain('microsoftsqlserver'),
  },
  realm: {
    name: 'Realm',
    icon: faDatabase,
  },
}

export const Frameworks: Record<Framework, CategoryData> = {
  odoo: {
    name: 'Odoo',
    image: iconOdoo,
  },
  liferay: {
    name: 'Liferay',
    image: iconLiferay,
  },
  firebase: {
    name: 'Firebase',
    image: devIconPlain('firebase'),
  },
  qt: {
    name: 'Qt',
    image: devIcon('qt'),
  }
}

export const Libraries: Record<Library, CategoryData> = {
  jquery: {
    name: 'jQuery',
    image: devIcon('jquery'),
  },
  react: {
    name: 'React',
    image: devIcon('react'),
  },
  reactnative: {
    name: 'React-Native',
    image: devIcon('react')
  },
  express: {
    name: 'Express',
    image:  devIcon('express'),
  },
  jest: {
    name: 'Jest',
    image:  devIconPlain('jest'),
  },
  redux: {
    name: 'Redux',
    image:  devIcon('redux'),
  },
  sequelize: {
    name: 'Sequelize',
    image:  devIcon('sequelize'),
  }
}

export const Languages: Record<Language, CategoryData> = {
  bash: {
    name: 'Bash',
    image: devIcon('bash')
  },
  c: {
    name: 'C',
    image: devIcon('c')
  },
  cplusplus: {
    name: 'C++',
    image: devIcon('cplusplus')
  },
  css: {
    name: 'CSS',
    image: devIcon('css3')
  },
  html: {
    name: 'HTML',
    image: devIcon('html5')
  },
  java: {
    name: 'Java',
    image: devIcon('java')
  },
  javascript: {
    name: 'Javascript',
    image: devIcon('javascript')
  },
  python: {
    name: 'Python',
    image: devIcon('python')
  },
  typescript: {
    name: 'Typescript',
    image: devIcon('typescript'),
  }
}
