import { Record } from './types'

// Import logos so they are bundled with app during build

import logoTTPowerGroup from './img/logos/ttpowergroup.png';

import logoWebsite from './img/headshot.png';
import logoIndepocket from './img/logos/indepocket.png';
import logoMidio from './img/logos/midio.png';
import logoRNMidi from './img/logos/react-native-midi.png';
import logoRNSoundfont from './img/logos/react-native-soundfont.png';

const KITTY = 'https://placekitten.com/g/200/200'

export const WorkRecords: Record[] = [
  {
    type: 'work',
    employer: 'T&T Power Group',
    title: 'Software Developer',
    summary: 'Worked on multiple customer and internal facing projects.',
    bullets: [
      'Developed a full-stack solution for remote monitoring of power generators over MODBUS.',
      'Worked on development of an internal ERP system.'
    ],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoTTPowerGroup,
    skills: ['algorithms','backend','frontend','devops','concurrent'],
    databases: ['postgresql'],
    languages: ['python','bash','javascript','html','css'],
    libraries: ['react'],
    frameworks: ['odoo'],
    tools: [],
    isDesktop: true,
    isMobile: true,
    links: [],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
  {
    type: 'work',
    employer: '',
    title: '',
    summary: '',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  },
];

export const ProjectRecords: Record[] = [
  {
    type: 'project',
    title: 'zachshaver.com',
    summary: 'You\'re looking at it!',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoWebsite,
    skills: ['frontend'],
    databases: [],
    languages: ['css','javascript','typescript'],
    libraries: ['react'],
    frameworks: [],
    tools: ['npm','node','gradle'],
    isDesktop: true,
    isMobile: true,
    links: [
      {
        type: 'website', 
        url: 'https://www.zachshaver.com/'
      }
    ],
  },
  {
    type: 'project',
    title: 'Indepocket',
    summary: 'A real-time collborative list manager for mobile.',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoIndepocket,
    skills: ['frontend'],
    databases: [],
    languages: ['css','javascript','typescript'],
    libraries: ['reactnative','redux'],
    frameworks: ['firebase'],
    tools: ['npm','node','gradle'],
    isMobile: true,
    links: [
      {
        type: 'google_play', 
        url: 'https://play.google.com/store/apps/details?id=com.shaver.indepocket'
      }
    ],
  },
  {
    type: 'project',
    title: 'Midio',
    summary: 'Play sounds using midi controllers plugged into your phone. Built using 2 of my other projects: react-native-midi and react-native-soundfont.',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoMidio,
    skills: ['frontend'],
    databases: [],
    languages: ['css','javascript','java'],
    libraries: ['reactnative'],
    frameworks: [],
    tools: ['npm','node','gradle'],
    isMobile: true,
    links: [
      {
        type: 'google_play', 
        url: 'https://play.google.com/store/apps/details?id=com.shaver.indepocket'
      }
    ],
  },
  {
    type: 'project',
    title: 'react-native-midi',
    summary: 'A midi driver for react-native',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoRNMidi,
    skills: [],
    databases: [],
    languages: ['java','javascript'],
    libraries: ['reactnative'],
    frameworks: [],
    tools: ['npm','node','gradle'],
    isMobile: true,
    links: [
      {
        type: 'npm', 
        url: 'https://www.npmjs.com/package/react-native-midi'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/react-native-midi'
      },
      {
        type: 'docs',
        url: 'https://github.com/ShavaShav/react-native-midi/blob/master/README.md'
      }
    ],
  },
  {
    type: 'project',
    title: 'react-native-soundfont',
    summary: 'A react-native library for playing music from notes of equal temperament',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoRNSoundfont,
    skills: ['frontend'],
    databases: [],
    languages: ['css','javascript'],
    libraries: ['reactnative'],
    frameworks: [],
    tools: ['npm','node','gradle'],
    isMobile: true,
    links: [
      {
        type: 'npm', 
        url: 'https://www.npmjs.com/package/react-native-soundfont'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/react-native-soundfont'
      },
      {
        type: 'docs',
        url: 'https://github.com/ShavaShav/react-native-soundfont/blob/master/README.md'
      }
    ],
  },
  {
    type: 'project',
    title: 'Juzahach',
    summary: 'Vehicle tracking system',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: 'https://juzahach-manager.herokuapp.com/'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/juzahach-manager',
        text: 'App'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/juzahach-edge',
        text: 'Edge'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/juzahach-cloud',
        text: 'Cloud'
      },
      {
        type: 'docs', 
        url: 'https://github.com/ShavaShav/juzahach-cloud/wiki'
      }
    ],
  },
  {
    type: 'project',
    title: 'Smartcampus',
    summary: 'Social network for the University of Windsor',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: 'http://smartcampus.cs.uwindsor.ca/'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/smartcampus-web',
        text: 'Client'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/smartcampus-api',
        text: 'Server'
      },
      {
        type: 'docs', 
        url: 'https://github.com/ShavaShav/smartcampus-api/wiki'
      }
    ],
  },
  {
    type: 'project',
    title: 'N-Queens Hill Climbing Visualization',
    summary: 'Visualization of the Hill Climbing local search algorithm on the N-Queens problem',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: 'executable', 
        url: 'https://github.com/ShavaShav/NQueens_HillClimbing/raw/master/NQueens_HillClimbing.jar'
        // url: 'downloads/NQueens_HillClimbing.jar'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/NQueens_HillClimbing'
      },
    ],
  },
  {
    type: 'project',
    title: 'Mail Jar',
    summary: 'A desktop email-client written in JavaFX',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: 'executable', 
        url: 'https://github.com/ShavaShav/MailJar/raw/master/MailJar.jar'
        // url: 'downloads/MailJar.jar'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/MailJar'
      }
    ],
  },
  {
    type: 'project',
    title: 'Cream',
    summary: 'Android money manager app',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isMobile: true,
    links: [
      {
        type: 'executable', 
        url: 'downloads/cream.apk'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/cream'
      },
      {
        type: 'docs', 
        url: 'docs/cream_report.pdf'
      }
    ],
  },
  {
    type: 'project',
    title: 'OS Process Synchronization Simulation',
    summary: 'A visualization of CPU task scheduling for teaching purposes',
    bullets: [],
    start: new Date('2020/01/01'),
    end: new Date(), // today
    logo: KITTY,
    skills: [],
    databases: [],
    languages: [],
    libraries: [],
    frameworks: [],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: 'executable', 
        url: 'https://github.com/ShavaShav/Process_Synchronization/raw/master/OS_Process_Synchronization.jar'
        // url: 'downloads/OS_Process_Synchronization.jar'
      },
      {
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/Process_Synchronization'
      },
    ],
  },
];

export const AllRecords = [...ProjectRecords, ...WorkRecords];
