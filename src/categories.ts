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

import iconOdoo from "./img/icons/odoo.png";
import iconLiferay from "./img/icons/liferay.png";
import iconSelenium from "./img/icons/selenium.png";
import iconBIRT from "./img/icons/birt.png";

const DEV_ICON_PATH = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const devIcon = (name: string) =>
  `${DEV_ICON_PATH}/${name}/${name}-original.svg`;
const devIconPlain = (name: string) =>
  `${DEV_ICON_PATH}/${name}/${name}-plain.svg`;
const devIconWordmark = (name: string) =>
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
    image:
      "https://api.iconify.design/simple-icons/styledcomponents.svg?color=brown",
  },
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
};
