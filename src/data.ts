import { Work, Project, CategoryData, Framework } from './types'

export const Frameworks: Record<Framework, CategoryData> = {
  'react': {
    'name': 'React',
    'image': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  'react-native' : {
    'name': 'React-Native',
    'image': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }
}

export const WorkRecords: Work[] = [
  {
    employer: 'T&T Power Group',
    title: 'Software Developer',
    description: 'Worked',
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: '',
    skills: [],
    languages: [],
    frameworks: ['react'],
    libraries: [],
    platforms: [],
    links: [],
  }
];

export const ProjectRecords: Project[] = [
  {
    title: 'Indepocket',
    description: 'Worked',
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: '',
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