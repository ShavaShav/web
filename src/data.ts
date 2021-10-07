import { Record } from './types'
import logoTTPowerGroup from './img/logos/ttpowergroup.png';
import logoIndepocket from './img/logos/indepocket.png';

export const WorkRecords: Record[] = [
  {
    type: 'work',
    employer: 'My fake boss dot com',
    title: 'Software Developer or something',
    summary: 'Worked on multiple customer and internal facing projects.',
    bullets: [
      'Developed a full-stack solution for remote monitoring of power generators over MODBUS.',
      'Worked on development of an internal ERP system.',
      'Did other stuff'
    ],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoTTPowerGroup,
    skills: ['algorithms','backend','frontend','devops','concurrent'],
    databases: ['postgresql','mysql'],
    languages: ['python','bash','javascript','html','css','cplusplus','python'],
    libraries: ['react','express','redux','sequelize'],
    frameworks: ['odoo'],
    isDesktop: true,
    isMobile: true,
    links: [
      {type: 'google_play', url: 'about'},
      {type: 'npm', url: 'about'},
      {type: 'website', url: 'about'},
      {type: 'executable', url: 'about'},
      {type: 'source_code', url: 'about'},
      {type: 'docs', url: 'about'},
    ],
  },
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
    isDesktop: true,
    isMobile: true,
    links: [],
  }
];

export const ProjectRecords: Record[] = [
  {
    type: 'project',
    title: 'Indepocket',
    summary: 'A real-time collborative list manager for mobile.',
    bullets: [],
    start: new Date('2021/09/01'),
    end: new Date(), // today
    logo: logoIndepocket,
    skills: [],
    databases: [],
    languages: ['javascript'],
    libraries: ['reactnative'],
    frameworks: [],
    isMobile: true,
    links: [
      {
        type: 'google_play', 
        url: 'https://play.google.com/store/apps/details?id=com.shaver.indepocket'
      }
    ],
    screenshot: '',
  }
];

export const AllRecords = [...WorkRecords, ...ProjectRecords];
