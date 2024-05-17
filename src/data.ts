import { Record } from "./types";

// Import logos so they are bundled with app during build

import logoTTPowerGroup from "./img/logos/ttpowergroup.png";
import logoERIS from "./img/logos/eris.png";
import logoRevision from "./img/logos/revision.png";
import logoGE from "./img/logos/ge.png";
import logoUWindsor from "./img/logos/uwindsor.png";

import logoWebsite from "./img/logos/zachshaver.png";
import logoIndepocket from "./img/logos/indepocket.png";
import logoMidio from "./img/logos/midio.png";
import logoRNMidi from "./img/logos/react-native-midi.png";
import logoRNSoundfont from "./img/logos/react-native-soundfont.png";
import logoCream from "./img/logos/cream.png";
import logoJuzahach from "./img/logos/juzahach.png";
import logoMailjar from "./img/logos/mailjar.png";
import logoNQueens from "./img/logos/nqueens.png";
import logoOSPRocessSync from "./img/logos/os_process_sync.png";
import logoSmartcampus from "./img/logos/smartcampus.png";
import { devIcon } from "./categories";

// const logoTTPowerGroup = "./img/logos/ttpowergroup.png";
// const logoERIS = "./img/logos/eris.png";
// const logoRevision = "./img/logos/revision.png";
// const logoGE = "./img/logos/ge.png";
// const logoUWindsor = "./img/logos/uwindsor.png";

// const logoWebsite = "./img/logos/zachshaver.png";
// const logoIndepocket = "./img/logos/indepocket.png";
// const logoMidio = "./img/logos/midio.png";
// const logoRNMidi = "./img/logos/react-native-midi.png";
// const logoRNSoundfont = "./img/logos/react-native-soundfont.png";
// const logoCream = "./img/logos/cream.png";
// const logoJuzahach = "./img/logos/juzahach.png";
// const logoMailjar = "./img/logos/mailjar.png";
// const logoNQueens = "./img/logos/nqueens.png";
// const logoOSPRocessSync = "./img/logos/os_process_sync.png";
// const logoSmartcampus = "./img/logos/smartcampus.png";


export const Subtitles = [
  "Software Developer",
  "Master of Null",
  "Quick to React",
  "King of the Heap",
  "Javascript Addict",
  "Git Guru",
  "DevOps Demon",
  "Dream Weaver",
  "Lord of the Files",
  "Python Charmer",
  "Objective-Oriented",
  "CSS Wrangler",
  "zachShaver = getPro();",
  "zachShaver.hire()",
  ".then(myCompany.profit);",
];

export const WorkRecords: Record[] = [
  {
    type: "work",
    employer: "Riskfuel Analytics",
    title: "Software Engineer",
    summary: "Worked on multiple customer and internal facing projects.",
    bullets: [
      "Developed numerous client and internal facing full stack applications utilizing a wide variety of technologies.",
      "Managed data generation and machine learning model kubernetes cluster.",
    ],
    start: new Date("2022/02/01"),
    logo: logoTTPowerGroup,
    skills: [
      "algorithms",
      "backend",
      "frontend",
      "devops",
      "concurrent",
      "testing",
      "rest",
      "teaching",
      "testing",
      "agile",
      "microservies",
      "eventDriven",
      "design",
      "auth",
      "distributed",
      "architecture",
    ],
    databases: ["postgresql", "cockroachdb", "kinetica", "redis"],
    languages: ["python", "bash", "typescript", "javascript", "html", "css", "rust", "golang"],
    libraries: ["react", "pytest", "pytorch", "express", "react", "styledcomponents", "prisma", "jest", "bullJs", "chartJs", "fastapi"],
    frameworks: ["grafana", "graphql", "material", "nextJs", "threeJs"],
    tools: [
      "aws",
      "docker",
      "nginx",
      "node",
      "npm",
      "swagger",
      "jira", 
      "kubernetes",
      "keycloak",
      "pulsar",
      "graphql",
      "azure",
      "loki",
      "prometheus",
      "helm",
      "argo",
      "harbor",
      "garden",
      "wandb",
      "ceph",
    ],
    isDesktop: true,
    isMobile: false,
    links: [
      {
        type: "website",
        url: "https://riskfuel.com/",
      },
    ],
  },
  {
    type: "work",
    employer: "T&T Power Group",
    title: "Software Developer",
    summary: "Worked on multiple customer and internal facing projects.",
    bullets: [
      "Developed a full-stack solution for remote monitoring of power generators over MODBUS.",
      "Worked on development of an internal ERP system. Responsible for complete implentation of business critical features such as service scheduling and timesheet management.",
    ],
    start: new Date("2020/03/01"),
    end: new Date("2022/02/01"),
    logo: logoTTPowerGroup,
    skills: [
      "algorithms",
      "backend",
      "frontend",
      "devops",
      "concurrent",
      "testing",
      "tdd",
      "vpn",
    ],
    databases: ["postgresql"],
    languages: ["python", "bash", "javascript", "html", "css", "xml"],
    libraries: ["react", "pytest"],
    frameworks: ["odoo", "grafana"],
    tools: [
      "aws",
      "docker",
      "gradle",
      "gimp",
      "nginx",
      "node",
      "npm",
      "swagger",
    ],
    isDesktop: true,
    isMobile: true,
    links: [
      {
        type: "website",
        url: "https://www.ttpowergroup.com/",
      },
    ],
  },
  {
    type: "work",
    employer: "Eramosa Engineering",
    title: "Full-stack Software Developer",
    summary:
      "Woked with a small team to develop, test and deliver various products. Some of the highlights are:",
    bullets: [
      "Maintained a mature enterprise SCADA reporting product called eRIS.",
      "Implemented a mobile companion application for eRIS.",
      "Developed a custom work reporting mobile application for a customer, used by over 100 employees daily.",
    ],
    start: new Date("2019/01/01"),
    end: new Date("2020/03/01"),
    logo: logoERIS,
    skills: [
      "agile",
      "algorithms",
      "backend",
      "frontend",
      "concurrent",
      "networking",
      "rest",
      "devops",
      "tdd",
      "testing",
    ],
    databases: ["sqlserver", "realm", "postgresql", "mysql"],
    languages: ["bash", "css", "java", "javascript", "html", "jsp", "xml"],
    libraries: ["react", "reactnative", "sequelize", "redux", "jquery"],
    frameworks: ["liferay", "android", "ios"],
    tools: [
      "birt",
      "gimp",
      "gradle",
      "nginx",
      "node",
      "npm",
      "oracle",
      "tomcat",
      "jenkins",
    ],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: "website",
        url: "https://eramosa.com/",
      },
      {
        type: "google_play",
        url: "https://play.google.com/store/apps/details?id=com.eliquet.eris",
        text: "eRIS",
      },
    ],
  },
  {
    type: "work",
    employer: "Revision Military",
    title: "Head Tracking Application Developer",
    summary:
      "Internship where I designed and developed an automated robotic testing system for aiding in test development of a novel smart-helmet's sensor fusion system. I wrote a desktop application to:",
    bullets: [
      "Run tests by sending commands to a robotic arm over serial that moved a phone (a mock helmet) on a set path.",
      "Assert that the phone's calculated orientation matched against the robot's actual orientation to product quantifiable results on sensor fusion effectiveness",
    ],
    start: new Date("2018/06/01"),
    end: new Date("2018/08/31"),
    logo: logoRevision,
    skills: [
      "algorithms",
      "concurrent",
      "robotics",
      "tdd",
      "testing",
      "frontend",
      "networking",
    ],
    databases: [],
    languages: ["java", "python"],
    libraries: [],
    frameworks: ["javafx", "android"],
    tools: [],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: "website",
        url: "https://www.revisionmilitary.com/",
      },
    ],
  },
  {
    type: "work",
    employer: "GE Digital",
    title: "Software Test Developer",
    summary:
      "Internship where I worked as part of a QA team across several large enterprise software projects, where I:",
    bullets: [
      "Developed end-to-end integration testing for a network security device using BDD test methods",
      "Lead development of a test plan for a new embedded OS.",
    ],
    start: new Date("2017/05/01"),
    end: new Date("2017/12/20"),
    logo: logoGE,
    skills: [
      "agile",
      "bdd",
      "testing",
      "algorithms",
      "devops",
      "qa",
      "testing",
      "concurrent",
      "rest",
      "frontend",
    ],
    databases: [],
    languages: ["javascript", "html", "bash", "c"],
    libraries: [],
    frameworks: [],
    tools: [
      "gradle",
      "jenkins",
      "jira",
      "node",
      "npm",
      "selenium",
      "cucumber",
      "swagger",
    ],
    isDesktop: true,
    links: [
      {
        type: "website",
        url: "https://www.ge.com/digital/",
      },
    ],
  },
  {
    type: "work",
    employer: "University of Windsor",
    title: "Computer Science Teaching Assistant",
    summary:
      "Provided teaching assistance in courses like Mobile Application Development, Software Development, Object-Oriented Programming Using Java, Computer Architecture, and Social Media & Mobile Technology",
    bullets: [],
    start: new Date("2016/05/01"),
    end: new Date("2018/12/18"),
    logo: logoUWindsor,
    skills: ["algorithms", "networking", "teaching"],
    databases: ["mysql", "sqlserver"],
    languages: ["java", "javascript", "assembly", "c", "csharp", "bash", "xml"],
    libraries: [],
    frameworks: ["javafx", "android"],
    tools: ["gimp"],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: "website",
        url: "https://www.uwindsor.ca/science/computerscience/",
      },
    ],
  },
];

export const ProjectRecords: Record[] = [
  {
    type: "project",
    title: "chat.zachshaver.com",
    summary:
      "A chatbot designed for pre-interviewing Zach.",
    bullets: [],
    start: new Date("2024/05/17"),
    logo: logoWebsite,
    skills: ["frontend", "backend", "rest"],
    databases: [],
    languages: ["css", "typescript"],
    libraries: ["fastapi", "react"],
    frameworks: [],
    tools: ["langchain"],
    isDesktop: true,
    isMobile: true,
    links: [
      {
        type: "website",
        url: "https://chat.zachshaver.com",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/zs-bot",
      },
    ],
  },
  {
    type: "project",
    title: "express-openapi-zod",
    summary:
      "Use zod to generate openapi schemas and add type safety to Express routers.",
    bullets: [
      "Generate openapi specification from express routers and zod schemas.",
      "Add types for express handler Request and Response objects."
    ],
    start: new Date("2023/10/04"),
    logo: devIcon("express"),
    skills: ["backend", "rest"],
    databases: [],
    languages: ["typescript"],
    libraries: ["express"],
    frameworks: ["openApi"],
    tools: [],
    isDesktop: true,
    isMobile: false,
    links: [
      {
        type: "npm",
        url: "https://www.npmjs.com/package/express-openapi-zod",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/express-openapi-zod",
      },
    ],
  },
  {
    type: "project",
    title: "express-openapi-typescript",
    summary:
      "Utilities for adding types to express routes according to an OpenAPI specification.",
    bullets: [],
    start: new Date("2023/10/04"),
    logo: devIcon("openapi"),
    skills: ["backend", "rest"],
    databases: [],
    languages: ["typescript"],
    libraries: ["express"],
    frameworks: ["openApi"],
    tools: [],
    isDesktop: true,
    isMobile: false,
    links: [
      {
        type: "npm",
        url: "https://www.npmjs.com/package/express-openapi-typescript",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/openapi-typescript-express",
      },
    ],
  },
  {
    type: "project",
    title: "zachshaver.com",
    summary:
      "You're looking at it! A portfolio of my projects and work, with a mobile-first design. Built with styled-components and using React best practises that I've picked up over the years.",
    bullets: [],
    start: new Date("2021/10/01"),
    logo: logoWebsite,
    skills: ["frontend"],
    databases: [],
    languages: ["css", "javascript", "typescript"],
    libraries: ["react", "styledcomponents"],
    frameworks: [],
    tools: ["npm", "node", "gradle"],
    isDesktop: true,
    isMobile: true,
    links: [
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/web",
      },
    ],
  },
  {
    type: "project",
    title: "Indepocket",
    summary:
      "A flexible real-time collborative list manager for mobile. Can do anything you would want a todo list app to do and more:",
    bullets: [
      "Share and work on lists together with friends",
      "Add custom backgrounds and icons",
      "Group lists into categories",
      "Reload lists on schedules",
    ],
    start: new Date("2021/09/01"),
    logo: logoIndepocket,
    skills: ["frontend"],
    databases: [],
    languages: ["css", "javascript", "typescript"],
    libraries: ["react", "reactnative", "redux"],
    frameworks: ["firebase"],
    tools: ["npm", "node", "gradle"],
    isMobile: true,
    links: [
      {
        type: "google_play",
        url: "https://play.google.com/store/apps/details?id=com.shaver.indepocket",
      },
    ],
  },
  {
    type: "project",
    title: "Midio",
    summary:
      "Play sounds from a variety of preloaded instruments, using MIDI controllers connected to your phone. Built using 2 of my other projects:",
    bullets: ["react-native-midi", "react-native-soundfont"],
    start: new Date("2020/12/01"),
    logo: logoMidio,
    skills: ["frontend"],
    databases: [],
    languages: ["css", "javascript", "java"],
    libraries: ["react", "reactnative"],
    frameworks: [],
    tools: ["npm", "node", "gradle"],
    isMobile: true,
    links: [
      {
        type: "google_play",
        url: "https://play.google.com/store/apps/details?id=com.shaver.midio",
      },
    ],
  },
  {
    type: "project",
    title: "react-native-midi",
    summary:
      "A MIDI driver for react-native. Allows developers to write mobile applications that can connect and listen to MIDI controllers.",
    bullets: [],
    start: new Date("2020/04/01"),
    logo: logoRNMidi,
    skills: [],
    databases: [],
    languages: ["java", "javascript"],
    libraries: ["react", "reactnative"],
    frameworks: ["android"],
    tools: ["npm", "node", "gradle"],
    isMobile: true,
    links: [
      {
        type: "npm",
        url: "https://www.npmjs.com/package/react-native-midi",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/react-native-midi",
      },
      {
        type: "docs",
        url: "https://github.com/ShavaShav/react-native-midi/blob/master/README.md",
      },
    ],
  },
  {
    type: "project",
    title: "react-native-soundfont",
    summary:
      "A react-native library for playing musical notes with sound files. Has support for rudimentary sound envelopes.",
    bullets: [],
    start: new Date("2020/04/01"),
    logo: logoRNSoundfont,
    skills: ["frontend"],
    databases: [],
    languages: ["css", "javascript"],
    libraries: ["react", "reactnative"],
    frameworks: [],
    tools: ["npm", "node", "gradle"],
    isMobile: true,
    links: [
      {
        type: "npm",
        url: "https://www.npmjs.com/package/react-native-soundfont",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/react-native-soundfont",
      },
      {
        type: "docs",
        url: "https://github.com/ShavaShav/react-native-soundfont/blob/master/README.md",
      },
    ],
  },
  {
    type: "project",
    title: "Juzahach",
    summary:
      "An Internet of Things system for tracking vehicles. Comprised of:",
    bullets: [
      "Edge devices which can be registered and stream their location,",
      "A Manager web app for managing the edge devices, and tracking their locations on a map,",
      "A cloud server which stores data and handles communications between the Manager app and the Edge devices over REST.",
    ],
    start: new Date("2018/11/01"),
    logo: logoJuzahach,
    skills: ["backend", "frontend", "networking", "rest"],
    databases: ["mysql"],
    languages: ["javascript", "css", "html", "cplusplus"],
    libraries: ["sequelize", "react", "express", "redux"],
    frameworks: ["qt", "android"],
    tools: ["heroku", "gradle", "node", "npm", "slack"],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=f3DWpWgH_d4",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/juzahach-manager",
        text: "Manager",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/juzahach-edge",
        text: "Edge",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/juzahach-cloud",
        text: "Cloud",
      },
      {
        type: "docs",
        url: "https://github.com/ShavaShav/juzahach-cloud/wiki",
      },
    ],
  },
  {
    type: "project",
    title: "Smartcampus",
    summary:
      "Social event-planning network for the University of Windsor (a.k.a a facebook clone). The client web app and the server were written as seperate applications, which communicate through a REST API.",
    bullets: [],
    start: new Date("2018/09/01"),
    logo: logoSmartcampus,
    skills: [
      "backend",
      "frontend",
      "networking",
      "rest",
      "devops",
      "agile",
      "testing",
    ],
    databases: ["neo4j"],
    languages: ["javascript", "css", "html"],
    libraries: ["react", "express", "redux"],
    frameworks: [],
    tools: ["slack", "gradle", "node", "npm"],
    isMobile: true,
    isDesktop: true,
    links: [
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/smartcampus-web",
        text: "Client",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/smartcampus-api",
        text: "Server",
      },
      {
        type: "docs",
        url: "https://docs.google.com/document/d/1DTHNMcmn1GT3cqiU44fqLknKX2hQbldzCX3QTxlMpf8/view#heading=h.8ase2afg7bkj",
        text: "Report",
      },
      {
        type: "docs",
        url: "https://github.com/ShavaShav/smartcampus-api/wiki",
        text: "Wiki",
      },
    ],
  },
  {
    type: "project",
    title: "Cream",
    summary:
      "A money management application for Android. Users can do things like",
    bullets: [
      "Record income and expenses",
      "Categorize transactions",
      "Get alerts for high spending",
      "View historical reports in the form of charts and graphs",
    ],
    start: new Date("2018/04/01"),
    logo: logoCream,
    skills: ["frontend"],
    databases: ["sqlite"],
    languages: ["java"],
    libraries: [],
    frameworks: ["android"],
    tools: ["gradle"],
    isMobile: true,
    links: [
      {
        type: "executable",
        url: "downloads/cream.apk",
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/cream",
      },
      {
        type: "docs",
        url: "docs/cream_report.pdf",
      },
    ],
  },
  {
    type: "project",
    title: "OS Process Synchronization Simulation",
    summary:
      "A visual simulation of CPU task scheduling for teaching purposes. Users can choose scheduling algorithm, create processes and watch how they would be allocated to a CPU. Complete with I/O and ready queues!",
    bullets: [],
    start: new Date("2017/04/01"),
    logo: logoOSPRocessSync,
    skills: ["algorithms", "frontend", "concurrent", "teaching"],
    databases: [],
    languages: ["java"],
    libraries: [],
    frameworks: ["javafx"],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: "executable",
        url: "https://github.com/ShavaShav/Process_Synchronization/raw/master/OS_Process_Synchronization.jar",
        // url: 'downloads/OS_Process_Synchronization.jar'
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/Process_Synchronization",
      },
      {
        type: "docs",
        url: "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/",
        text: "CPU Schedules",
      },
    ],
  },
  {
    type: "project",
    title: "Mail Jar",
    summary:
      "A desktop email-client written in JavaFX. Supports GMail, Outlook, Hotmail, and more. You'll never have to open a browser to check your email again!",
    bullets: [],
    start: new Date("2017/03/01"),
    logo: logoMailjar,
    skills: ["algorithms", "frontend", "networking"],
    databases: [],
    languages: ["java"],
    libraries: [],
    frameworks: ["javafx"],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: "executable",
        url: "https://github.com/ShavaShav/MailJar/raw/master/MailJar.jar",
        // url: 'downloads/MailJar.jar'
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/MailJar",
      },
    ],
  },
  {
    type: "project",
    title: "N-Queens Hill Climbing Visualization",
    summary:
      "A visualization of the Hill Climbing local search algorithm on the N-Queens problem. Customize the algorithm's parameters and watch the N-Queens get solved in real time!",
    bullets: [],
    start: new Date("2017/02/10"),
    logo: logoNQueens,
    skills: ["algorithms", "frontend", "teaching"],
    databases: [],
    languages: ["java"],
    libraries: [],
    frameworks: ["javafx"],
    tools: [],
    isDesktop: true,
    links: [
      {
        type: "executable",
        url: "https://github.com/ShavaShav/NQueens_HillClimbing/raw/master/NQueens_HillClimbing.jar",
        // url: 'downloads/NQueens_HillClimbing.jar'
      },
      {
        type: "source_code",
        url: "https://github.com/ShavaShav/NQueens_HillClimbing",
      },
      {
        type: "docs",
        url: "https://www.geeksforgeeks.org/n-queen-problem-local-search-using-hill-climbing-with-random-neighbour/",
        text: "N-Queens Problem",
      },
    ],
  },
];

