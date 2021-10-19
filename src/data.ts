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
    links: [
      {
        type: 'website', 
        url: 'https://www.ttpowergroup.com/'
      }
    ],
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
        url: 'https://www.uwindsor.ca/science/computerscience/'
      }
    ],
  }
];

export const ProjectRecords: Record[] = [
  {
    type: 'project',
    title: 'zachshaver.com',
    summary: 'You\'re looking at it! A portfolio of my projects and work, with a mobile-first design. Built with very few dependencies and using React best practises that I\'ve learnt over the years.',
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
        type: 'source_code', 
        url: 'https://github.com/ShavaShav/web'
      }
    ],
  },
  {
    type: 'project',
    title: 'Indepocket',
    summary: 'A flexible real-time collborative list manager for mobile. Can do anything you would want a todo list app to do and more:',
    bullets: ['Share and work on lists together with friends','Add custom backgrounds and icons', 'Group lists into categories', 'Reload lists on schedules'],
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
    summary: 'Play sounds from a variety of preloaded instruments, using MIDI controllers connected to your phone. Built using 2 of my other projects:',
    bullets: ['react-native-midi','react-native-soundfont'],
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
    summary: 'A MIDI driver for react-native. Allows developers to write mobile applications that can connect and listen to MIDI controllers.',
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
    summary: 'A react-native library for playing musical notes with sound files. Has support for rudimentary sound envelopes.',
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
    summary: 'An Internet of Things system for tracking vehicles. Comprised of:',
    bullets: [
      'Edge devices which can be registered and stream their location,',
      'A Manager web app for managing the edge devices, and tracking their locations on a map,',
      'A cloud server which stores data and handles communications between the Manager app and the Edge devices over REST.'],
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
    summary: 'Social event-planning network for the University of Windsor (a.k.a a facebook clone). The client web app and the server were written as seperate applications, which communicate through a REST API.',
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
    summary: 'A money management application for Android. Users can do things like',
    bullets: ['Record income and expenses','Categorize transactions','Get alerts for high spending','View historical reports in the form of charts and graphs'],
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
    summary: 'A visual simulation of CPU task scheduling for teaching purposes. Users can choose scheduling algorithm, create processes and watch how they would be allocated to a CPU. Complete with I/O and ready queues!',
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
      {
        type: 'docs', 
        url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/',
        text: 'CPU Scheduling'
      },
    ],
  },
  {
    type: 'project',
    title: 'Mail Jar',
    summary: 'A desktop email-client written in JavaFX. Supports GMail, Outlook, Hotmail, and more. You\'ll never have to open a browser to check your email again!',
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
      },
    ],
  },
  {
    type: 'project',
    title: 'N-Queens Hill Climbing Visualization',
    summary: 'A visualization of the Hill Climbing local search algorithm on the N-Queens problem. Customize the algorithm\'s parameters and watch the N-Queens get solved in real time!',
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
      {
        type: 'docs', 
        url: 'https://www.geeksforgeeks.org/n-queen-problem-local-search-using-hill-climbing-with-random-neighbour/',
        text: 'N-Queens Problem'
      },
    ],
  },
];
