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
  faHardHat,
  faLaptopCode,
  faSchool,
  faFeather,
  faPlug,
  faBoxes,
  faFingerprint,
  faRulerCombined,
  faCalendar,
  faSitemap,
  faBullseye,
  faChartLine,
  faLink,
  faServer,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faAppStoreIos, faAws } from "@fortawesome/free-brands-svg-icons";

import {
  CategoryData,
  Framework,
  Language,
  Library,
  Database,
  Skill,
  Tool,
} from "./types";

import { faFileCode } from "@fortawesome/free-regular-svg-icons";

import iconOdoo from "./img/icons/odoo.png";
import iconLiferay from "./img/icons/liferay.png";
import iconSelenium from "./img/icons/selenium.png";
import iconBIRT from "./img/icons/birt.png";

// const iconOdoo = "./img/icons/odoo.png";
// const iconLiferay = "./img/icons/liferay.png";
// const iconSelenium = "./img/icons/selenium.png";
// const iconBIRT = "./img/icons/birt.png";

const DEV_ICON_PATH = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export const devIcon = (name: string) =>
  `${DEV_ICON_PATH}/${name}/${name}-original.svg`;
export const devIconPlain = (name: string) =>
  `${DEV_ICON_PATH}/${name}/${name}-plain.svg`;
export const devIconWordmark = (name: string) =>
  `${DEV_ICON_PATH}/${name}/${name}-original-wordmark.svg`;

export const Tools: Record<Tool, CategoryData> = {
  aws: {
    name: "AWS",
    icon: faAws,
  },
  birt: {
    name: "BIRT",
    image: iconBIRT,
  },
  cucumber: {
    name: "Cucumber",
    image: devIconPlain("cucumber"),
  },
  docker: {
    name: "Docker",
    image: devIcon("docker"),
  },
  gimp: {
    name: "GIMP",
    image: devIcon("gimp"),
  },
  gradle: {
    name: "Gradle",
    image: devIconPlain("gradle"),
  },
  heroku: {
    name: "Heroku",
    image: devIcon("heroku"),
  },
  jenkins: {
    name: "Jenkins",
    image: devIcon("jenkins"),
  },
  jira: {
    name: "Jira",
    image: devIcon("jira"),
  },
  nginx: {
    name: "nginx",
    image: devIcon("nginx"),
  },
  node: {
    name: "Node",
    image: devIcon("nodejs"),
  },
  npm: {
    name: "npm",
    image: devIconWordmark("npm"),
  },
  oracle: {
    name: "Oracle",
    image: devIcon("oracle"),
  },
  selenium: {
    name: "Selenium",
    image: iconSelenium,
  },
  slack: {
    name: "Slack",
    image: devIcon("slack"),
  },
  tomcat: {
    name: "Tomcat",
    image: devIcon("tomcat"),
  },
  swagger: {
    name: "Swagger",
    image: "https://api.iconify.design/logos/swagger.svg",
  },
  kubernetes: {
    name: "Kubernetes",
    image: devIcon("kubernetes"),
  },
  keycloak: {
    name: "Keycloak",
    Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.742 1.182l-12.493.002C4.155 4.784 2.079 8.393 0 12.002c2.071 3.612 4.162 7.214 6.252 10.816l12.49-.004l3.089-5.404h2.158v-.002H24L23.996 6.59h-2.168zM8.327 4.792h2.081l1.04 1.8l-3.12 5.413l3.117 5.403l-1.035 1.81H8.327a2048 2048 0 0 0-4.168-7.204zm6.241 0l2.086.003q2.088 3.608 4.166 7.222l-4.167 7.2h-2.08c-.382-.562-1.038-1.808-1.038-1.808l3.123-5.405l-3.124-5.413z"></path></svg>
  },
  pulsar: {
    name: "Pulsar",
    image: devIcon("pulsar"),
  },
  graphql: {
    name: "GraphQL",
    image: devIcon("graphql"),
  },
  azure: {
    name: "Azure",
    image: devIcon("azure"),
  },
  loki: {
    name: "Loki",
    image: undefined,
    icon: faFileCode
  },
  prometheus: {
    name: "Prometheus",
    image: devIcon("prometheus"),
  },
  helm: {
    name: "Helm",
    image: devIcon("helm"),
  },
  argo: {
    name: "Argo",
    image: devIcon("argocd"),
  },
  harbor: {
    name: "Harbor",
    Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.006 15.751l4.256 1.876l.066.805l-4.388-1.934zm.304-3.435h-.605V11.21h.381V8.95h-.381v-.649l2.118-2.073v-.146c0-.11.09-.2.2-.2s.2.09.2.2v.146l2.12 2.073v.65h-.382v2.259h.381v1.106h-.514l.27 3.313L7.17 13.9zm.39-1.106h.628v-.965c0-.383.313-.696.695-.696s.696.313.696.696v.965h.628V8.95H7.7zm-.81 5.84l-.066.747l4.618 2.035l-.066-.805zm.23-2.6l-.066.747l4.158 1.832l-.065-.805l-4.026-1.774zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12S5.383 0 12 0s12 5.383 12 12m-2.43-.715a10 10 0 0 0-.223-1.523l-9.751.332l8.801-2.828l-.019-.037A9.8 9.8 0 0 0 19.23 5.59l-7.786 4.03l5.712-5.941a9.7 9.7 0 0 0-5.14-1.474c-5.371 0-9.74 4.369-9.74 9.74a9.74 9.74 0 0 0 4.35 8.11l.151-1.704l4.715 2.078l.102 1.246q.21.01.422.01c4.646 0 8.54-3.27 9.507-7.63l-10.08-3.497z"></path></svg>
  },
  garden: {
    name: "Garden.io",
    icon: faSeedling
  },
  wandb: {
    name: "WandB",
    icon: faServer
  },
  ceph: {
    name: "Ceph",
    image: undefined,
    Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.959.257A11.9 11.9 0 0 0 3.503 3.76A11.92 11.92 0 0 0 0 12.217a11.9 11.9 0 0 0 1.207 5.243c.72 1.474 1.888 2.944 3.208 4.044c.86-.47 1.35-.99 1.453-1.545c.1-.533-.134-1.107-.737-1.805a9.03 9.03 0 0 1-2.219-5.937c0-4.988 4.058-9.047 9.047-9.047h.08c4.99 0 9.048 4.059 9.048 9.047a9.03 9.03 0 0 1-2.218 5.936c-.599.693-.84 1.292-.735 1.83c.108.556.595 1.068 1.449 1.522c1.322-1.1 2.489-2.57 3.209-4.046A11.9 11.9 0 0 0 24 12.217a11.93 11.93 0 0 0-3.503-8.457A11.92 11.92 0 0 0 12.04.257h-.041zm-.005 4.837a7.07 7.07 0 0 0-3.76 1.075A7.2 7.2 0 0 0 6.15 8.093a7.2 7.2 0 0 0-1.161 2.65a7.2 7.2 0 0 0 .04 3.125a7.1 7.1 0 0 0 1.22 2.607c.154.207.326.396.509.597l.185.202l.005.006q.012.01.026.027c.635.738.957 1.533.957 2.36a3.4 3.4 0 0 1-1.788 2.989a12 12 0 0 0 2.685 1.087c.14-.088.614-.441 1.077-1.083a4.9 4.9 0 0 0 .94-2.99a6.6 6.6 0 0 0-.49-2.37a6.7 6.7 0 0 0-1.302-2.033l-.002-.004l-.124-.142c-.21-.245-.428-.497-.602-.792a4.1 4.1 0 0 1-.462-1.135a4.3 4.3 0 0 1-.024-1.85a4.25 4.25 0 0 1 .686-1.564a4.22 4.22 0 0 1 3.432-1.773h.085a4.2 4.2 0 0 1 3.432 1.773c.33.466.568 1.007.686 1.565a4.3 4.3 0 0 1-.023 1.849a4.1 4.1 0 0 1-.463 1.135c-.173.295-.391.547-.602.792l-.123.142l-.004.004a6.7 6.7 0 0 0-1.301 2.033a6.6 6.6 0 0 0-.49 2.37a4.9 4.9 0 0 0 .94 2.99c.463.642.937.995 1.076 1.083a11.8 11.8 0 0 0 2.687-1.087a3.4 3.4 0 0 1-1.789-2.988c0-.817.313-1.59.956-2.359l.027-.03l.006-.004l.184-.204c.183-.2.355-.39.51-.596a7.1 7.1 0 0 0 1.22-2.608a7.2 7.2 0 0 0 .04-3.124a7.2 7.2 0 0 0-1.16-2.65a7.2 7.2 0 0 0-2.044-1.924a7.07 7.07 0 0 0-3.762-1.075h-.09zM12 9.97a2.365 2.365 0 0 0-2.362 2.361A2.364 2.364 0 0 0 12 14.691a2.363 2.363 0 0 0 2.36-2.36A2.364 2.364 0 0 0 12 9.968z"></path></svg>
  },
  langchain: {
    name: "Langchain",
    icon: faLink
  }
};

export const Skills: Record<Skill, CategoryData> = {
  agile: {
    name: "Agile",
    icon: faRunning,
  },
  algorithms: {
    name: "Algorithms",
    icon: faPuzzlePiece,
  },
  backend: {
    name: "Backend",
    icon: faCogs,
  },
  bdd: {
    name: "BDD",
    icon: faChalkboardTeacher,
  },
  concurrent: {
    name: "Concurrency",
    icon: faBezierCurve,
  },
  devops: {
    name: "DevOps",
    icon: faHardHat,
  },
  frontend: {
    name: "Frontend",
    icon: faPalette,
  },
  networking: {
    name: "Networks",
    icon: faNetworkWired,
  },
  qa: {
    name: "QA",
    icon: faSearch,
  },
  rest: {
    name: "REST",
    icon: faPaperPlane,
  },
  robotics: {
    name: "Robotics",
    icon: faRobot,
  },
  teaching: {
    name: "Teaching",
    icon: faSchool,
  },
  testing: {
    name: "Testing",
    icon: faVial,
  },
  tdd: {
    name: "TDD",
    icon: faRecycle,
  },
  vpn: {
    name: "VPN",
    icon: faPlug,
  },
  microservies: {
    name: "Microservices",
    icon: faSitemap
  },
  eventDriven: {
    name: "Event driven",
    icon: faCalendar
  },
  design: {
    name: "Design",
    icon: faRulerCombined
  },
  auth: {
    name: "Auth",
    icon: faFingerprint
  },
  distributed: {
    name: "Distributed Computing",
    icon: faBoxes
  },
  architecture: {
    name: "Architecture",
    icon: faChalkboardTeacher,
  }
};

export const Databases: Record<Database, CategoryData> = {
  mysql: {
    name: "MySQL",
    image: devIcon("mysql"),
  },
  neo4j: {
    name: "Neo4J",
    image: devIcon("neo4j"),
  },
  postgresql: {
    name: "Postgres",
    image: devIcon("postgresql"),
  },
  sqlserver: {
    name: "SQL Server",
    image: devIconPlain("microsoftsqlserver"),
  },
  sqlite: {
    name: "SQLite",
    icon: faFeather,
  },
  realm: {
    name: "Realm",
    icon: faDatabase,
  },
  cockroachdb: {
    name: "CockroachDB",
    icon: faDatabase
  },
  kinetica: {
    name: "Kinetica",
    icon: faDatabase
  },
  redis: {
    name: "Redis",
    image: devIcon("redis"),
  }
};

export const Frameworks: Record<Framework, CategoryData> = {
  android: {
    name: "Android",
    image: devIcon("android"),
  },
  ios: {
    name: "iOS",
    icon: faAppStoreIos,
  },
  odoo: {
    name: "Odoo",
    image: iconOdoo,
  },
  liferay: {
    name: "Liferay",
    image: iconLiferay,
  },
  firebase: {
    name: "Firebase",
    image: devIconPlain("firebase"),
  },
  qt: {
    name: "Qt",
    image: devIcon("qt"),
  },
  javafx: {
    name: "JavaFX",
    image: devIcon("java"),
  },
  grafana: {
    name: "Grafana",
    image: "https://api.iconify.design/logos/grafana.svg?color=yellow",
  },
  graphql: {
    name: "GraphQL",
    image: devIcon("graphql"),
  },
  material: {
    name: "Material Design",
    image: devIcon("materialui"),
  },
  nextJs: {
    name: "Next.JS",
    image: devIcon("nextjs"),
  },
  openApi: {
    name: "OpenAPI",
    image: devIcon("openapi"),
  },
  threeJs: {
    name: "Three.JS",
    image: devIcon("threejs"),
  }
};

export const Libraries: Record<Library, CategoryData> = {
  jquery: {
    name: "jQuery",
    image: devIcon("jquery"),
  },
  react: {
    name: "React",
    image: devIcon("react"),
  },
  reactnative: {
    name: "React-Native",
    image: devIcon("react"),
  },
  express: {
    name: "Express",
    image: devIcon("express"),
  },
  jest: {
    name: "Jest",
    image: devIconPlain("jest"),
  },
  redux: {
    name: "Redux",
    image: devIcon("redux"),
  },
  sequelize: {
    name: "Sequelize",
    image: devIcon("sequelize"),
  },
  pytest: {
    name: "PyTest",
    image: "https://api.iconify.design/simple-icons/pytest.svg?color=yellow",
  },
  styledcomponents: {
    name: "styled components",
    image: "https://api.iconify.design/simple-icons/styledcomponents.svg?color=brown",
  },
  pytorch: {
    name: "PyTorch",
    image: devIcon("pytorch"),
  },
  prisma: {
    name: "Prisma",
    image: devIcon("prisma"),
  },
  bullJs: {
    name: "BullJS",
    icon: faBullseye
  },
  chartJs: {
    name: "Chart.js",
    icon: faChartLine
  },
  fastapi: {
    name: "FastAPI",
    image: devIcon("fastapi"),
  }
};

export const Languages: Record<Language, CategoryData> = {
  assembly: {
    name: "Assembly",
    icon: faLaptopCode,
  },
  bash: {
    name: "Bash",
    image: devIcon("bash"),
  },
  c: {
    name: "C",
    image: devIcon("c"),
  },
  cplusplus: {
    name: "C++",
    image: devIcon("cplusplus"),
  },
  csharp: {
    name: "C#",
    image: devIcon("csharp"),
  },
  css: {
    name: "CSS",
    image: devIcon("css3"),
  },
  html: {
    name: "HTML",
    image: devIcon("html5"),
  },
  java: {
    name: "Java",
    image: devIcon("java"),
  },
  javascript: {
    name: "Javascript",
    image: devIcon("javascript"),
  },
  jsp: {
    name: "JSP",
    image: devIcon("java"),
  },
  python: {
    name: "Python",
    image: devIcon("python"),
  },
  typescript: {
    name: "Typescript",
    image: devIcon("typescript"),
  },
  xml: {
    name: "XML (XSD) Schema",
    image: "https://api.iconify.design/vscode-icons/file-type-xml.svg",
  },
  rust: {
    name: "Rust",
    image: devIcon("rust"),
  },
  golang: {
    name: "Golang",
    image: devIcon("go"),
  }
};
