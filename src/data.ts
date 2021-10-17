import { Record } from './types'

// Import logos so they are bundled with app during build

import logoTTPowerGroup from './img/logos/ttpowergroup.png';
import logoERIS from './img/logos/eris.png';
import logoRevision from './img/logos/revision.png';
import logoGE from './img/logos/ge.png';
import logoUWindsor from './img/logos/uwindsor.png';

import logoWebsite from './img/headshot.png';
import logoIndepocket from './img/logos/indepocket.png';
import logoMidio from './img/logos/midio.png';
import logoRNMidi from './img/logos/react-native-midi.png';
import logoRNSoundfont from './img/logos/react-native-soundfont.png';
import logoCream from './img/logos/cream.png';
import logoJuzahach from './img/logos/juzahach.png';
import logoMailjar from './img/logos/mailjar.png';
import logoNQueens from './img/logos/nqueens.png';
import logoOSPRocessSync from './img/logos/os_process_sync.png';
import logoSmartcampus from './img/logos/smartcampus.png';

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
    start: new Date('2021/03/01'),
    logo: logoTTPowerGroup,
    skills: ['algorithms','backend','frontend','devops','concurrent'],
    databases: ['postgresql'],
    languages: ['python','bash','javascript','html','css'],
    libraries: ['react'],
    frameworks: ['odoo'],
    tools: ['aws','docker','gradle','gimp','nginx','node','npm'],
    isDesktop: true,
    isMobile: true,
    links: [],
  },
  {
    type: 'work',
    employer: 'Eramosa Engineering',
    title: 'Full-stack Software Developer',
    summary: 'Worked with a small team to develop, test and deliver a mature enterprise SCADA reporting product, along with custom web and mobile applications.',
    bullets: [],
    start: new Date('2019/01/01'),
    end: new Date('2020/03/01'),
    logo: logoERIS,
    skills: ['agile','algorithms','backend','frontend','concurrent','networking','rest','devops','tdd','testing'],
    databases: ['sqlserver','realm','postgresql','mysql'],
    languages: ['bash','css','java','javascript','html','jsp'],
    libraries: ['reactnative','sequelize','redux','jquery'],
    frameworks: ['liferay'],
    tools: ['birt','gimp','gradle','nginx','node','npm','oracle','tomcat','jenkins'],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: 'https://eramosa.com/'
      },
      {
        type: 'google_play', 
        url: 'https://play.google.com/store/apps/details?id=com.eliquet.eris',
        text: 'eRIS'
      }
    ],
  },
  {
    type: 'work',
    employer: 'Revision Military',
    title: 'Head Tracking Application Developer',
    summary: 'Internship where I designed and developed an automated robotic testing system for development of a novel smart-helmet.',
    bullets: [],
    start: new Date('2018/06/01'),
    end: new Date('2018/08/31'),
    logo: logoRevision,
    skills: ['algorithms','concurrent','robotics','tdd','testing','frontend','networking'],
    databases: [],
    languages: ['java','python'],
    libraries: [],
    frameworks: ['javafx','android'],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: 'https://www.revisionmilitary.com/'
      }
    ],
  },
  {
    type: 'work',
    employer: 'GE Digital',
    title: 'Software Test Developer',
    summary: 'Internship where I developed end-to-end intergration testing for a network security device and an embedded OS.',
    bullets: [],
    start: new Date('2017/05/01'),
    end: new Date('2017/12/20'),
    logo: logoGE,
    skills: ['agile','bdd','testing','algorithms','devops','qa','testing','concurrent','rest','frontend'],
    databases: [],
    languages: ['javascript','html','bash','c'],
    libraries: [],
    frameworks: [],
    tools: ['gradle','jenkins','jira','node','npm','selenium','cucumber'],
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: 'https://www.ge.com/digital/'
      }
    ],
  },
  {
    type: 'work',
    employer: 'University of Windsor',
    title: 'Computer Science Teaching Assistant',
    summary: 'Provided teaching assistance in courses like Mobile Application Development, Software Development, Object-Oriented Programming Using Java, Computer Architecture, and Social Media & Mobile Technology',
    bullets: [],
    start: new Date('2016/05/01'),
    end: new Date('2018/12/18'),
    logo: logoUWindsor,
    skills: ['algorithms','networking','teaching'],
    databases: ['mysql','sqlserver'], 
    languages: ['java','javascript','assembly','c','csharp','bash'],
    libraries: [],
    frameworks: ['javafx','android'],
    tools: ['gimp'],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'website', 
        url: ''
      }
    ],
  }
];

export const ProjectRecords: Record[] = [
  {
    type: 'project',
    title: 'zachshaver.com',
    summary: 'You\'re looking at it!',
    bullets: [],
    start: new Date('2021/10/01'),
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
    start: new Date('2020/12/01'),
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
    start: new Date('2020/04/01'),
    logo: logoRNMidi,
    skills: [],
    databases: [],
    languages: ['java','javascript'],
    libraries: ['reactnative'],
    frameworks: ['android'],
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
    start: new Date('2020/04/01'),
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
    start: new Date('2018/11/01'),
    logo: logoJuzahach,
    skills: ['backend','frontend','networking','rest'],
    databases: ['mysql'],
    languages: ['javascript','css','html'],
    libraries: ['sequelize','react','express','redux'],
    frameworks: ['qt','android'],
    tools: ['heroku','gradle','node','npm','slack'],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: 'youtube', 
        url: 'https://www.youtube.com/watch?v=f3DWpWgH_d4'
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
    start: new Date('2018/09/01'),
    logo: logoSmartcampus,
    skills: ['backend','frontend','networking','rest','devops','agile','testing'],
    databases: ['neo4j'],
    languages: ['javascript','css','html'],
    libraries: ['react','express','redux'],
    frameworks: [],
    tools: ['slack','gradle','node','npm'],
    isMobile: true,
    isDesktop: true,
    links: [
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
        url: 'https://docs.google.com/document/d/1DTHNMcmn1GT3cqiU44fqLknKX2hQbldzCX3QTxlMpf8/view#heading=h.8ase2afg7bkj',
        text: 'Report'
      },
      {
        type: 'docs', 
        url: 'https://github.com/ShavaShav/smartcampus-api/wiki',
        text: 'Wiki'
      }
    ],
  },
  {
    type: 'project',
    title: 'Cream',
    summary: 'Android money manager app',
    bullets: [],
    start: new Date('2018/04/01'),
    logo: logoCream,
    skills: ['frontend'],
    databases: ['sqlite'],
    languages: ['java'],
    libraries: [],
    frameworks: ['android'],
    tools: ['gradle'],
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
    start: new Date('2017/04/01'),
    logo: logoOSPRocessSync,
    skills: ['algorithms','frontend','concurrent','teaching'],
    databases: [],
    languages: ['java'],
    libraries: [],
    frameworks: ['javafx'],
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
  {
    type: 'project',
    title: 'Mail Jar',
    summary: 'A desktop email-client written in JavaFX',
    bullets: [],
    start: new Date('2017/03/01'),
    logo: logoMailjar,
    skills: ['algorithms','frontend','networking'],
    databases: [],
    languages: ['java'],
    libraries: [],
    frameworks: ['javafx'],
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
    title: 'N-Queens Hill Climbing Visualization',
    summary: 'Visualization of the Hill Climbing local search algorithm on the N-Queens problem',
    bullets: [],
    start: new Date('2017/02/10'),
    logo: logoNQueens,
    skills: ['algorithms','frontend','teaching'],
    databases: [],
    languages: ['java'],
    libraries: [],
    frameworks: ['javafx'],
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
];
