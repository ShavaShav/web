import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type Skill =
  | "robotics"
  | "devops"
  | "tdd"
  | "bdd"
  | "algorithms"
  | "networking"
  | "rest"
  | "frontend"
  | "backend"
  | "concurrent"
  | "agile"
  | "testing"
  | "qa"
  | "teaching"
  | "vpn";
export type Language =
  | "assembly"
  | "java"
  | "javascript"
  | "typescript"
  | "python"
  | "c"
  | "bash"
  | "cplusplus"
  | "html"
  | "css"
  | "jsp"
  | "csharp"
  | "xml";
export type Database =
  | "postgresql"
  | "mysql"
  | "neo4j"
  | "realm"
  | "sqlserver"
  | "sqlite";
export type Tool =
  | "selenium"
  | "docker"
  | "cucumber"
  | "gradle"
  | "birt"
  | "tomcat"
  | "jenkins"
  | "node"
  | "aws"
  | "gimp"
  | "heroku"
  | "jira"
  | "nginx"
  | "npm"
  | "oracle"
  | "slack"
  | "swagger";
export type Framework =
  | "android"
  | "ios"
  | "liferay"
  | "odoo"
  | "firebase"
  | "qt"
  | "javafx"
  | "grafana";
export type Library =
  | "jquery"
  | "react"
  | "reactnative"
  | "express"
  | "jest"
  | "redux"
  | "sequelize"
  | "pytest"
  | "styledcomponents";
export type Platform =
  | "android"
  | "ios"
  | "windows"
  | "macos"
  | "linux"
  | "browser";

export type CategoryData = {
  name: string;
  image?: string;
  icon?: IconDefinition;
};

export type Link = {
  type:
    | "google_play"
    | "executable"
    | "website"
    | "source_code"
    | "docs"
    | "npm"
    | "youtube";
  url: string;
  text?: string;
};

export type Record = {
  type: "work" | "project";
  title: string;
  summary: string;
  bullets: string[];
  start: Date;
  end?: Date;
  logo: string;
  skills: Skill[];
  databases: Database[];
  languages: Language[];
  frameworks: Framework[];
  libraries: Library[];
  tools: Tool[];
  isDesktop?: boolean;
  isMobile?: boolean;
  links: Link[];
  // Project specific
  screenshot?: string;
  // Work specific
  employer?: string;
};
