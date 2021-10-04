import { Record as XRecord, CategoryData, Framework, Language } from './types'
import logoTTPowerGroup from './img/logos/ttpowergroup.png';
import logoIndepocket from './img/logos/indepocket.png';

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

export const Languages: Record<Language, CategoryData> = {
  'javascript': {
    'name': 'Javascript',
    'image': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  'java' : {
    'name': 'Java',
    'image': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
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
    languages: ['javascript','java'],
    frameworks: ['react','react-native','react-native','react-native','react-native','react-native','react-native'],
    libraries: [],
    isDesktop: true,
    isMobile: true,
    links: [
      {type: 'google_play', url: 'blank'}
    ],
  },
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
