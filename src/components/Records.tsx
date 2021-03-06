import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  faBriefcase,
  faProjectDiagram,
  faSortAmountDown,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectRecords, WorkRecords } from "../data";
import CategoryFilters from "./CategoryFilters";
import RecordList from "./RecordList";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import { Record } from "../types";
import Button from "./Button";
import NoRecordsMessage from "./NoRecordsMessage";

interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly isActive: boolean;
}

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + "px"}) {
    flex-direction: row;
  }
`;

const Main = styled.article`
  flex: 1;
`;

const RecordHeader = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-bottom: 15px;
`;

const ToggleButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 50px;
`;

const ToggleButton = styled(Button)<ToggleButtonProps>`
  background: ${({ theme, isActive }) =>
    isActive
      ? "none"
      : "linear-gradient(transparent,rgba(0, 0, 0, 0.2)) top/100% 800%"};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.body : theme.recordListHeader};
  color: ${({ theme, isActive }) =>
    isActive ? theme.text : theme.recordListHeaderTint};
  transition: all 0.5s linear;
  border-radius: 0;
  border: none;
  flex: 1;
  font-size: 1em;
`;

const SortButton = styled(Button)`
  background-color: ${({ theme }) => theme.recordListHeader};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
  border-radius: 0;
  border: none;
  width: 44px;
`;

const Records = (props: any) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [isShowingWork, setIsShowingWork] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const [isShowingDesktop, setIsShowingDesktop] = useState(false);
  const [isShowingMobile, setIsShowingMobile] = useState(false);
  const [databases, setDatabases] = useState<string[]>([]);
  const [frameworks, setFrameworks] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [libraries, setLibraries] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [tools, setTools] = useState<string[]>([]);

  const onPlatformChange = (isDesktop: boolean, isMobile: boolean) => {
    setIsShowingDesktop(isDesktop);
    setIsShowingMobile(isMobile);
  };

  useEffect(() => {
    let records: Record[] = isShowingWork ? WorkRecords : ProjectRecords;

    if (isAscending)
      records.sort((a, b) => a.start.getTime() - b.start.getTime());
    else 
      records.sort((a, b) => b.start.getTime() - a.start.getTime());

    // Remove unwanted platforms
    records = records.filter(
      (record) =>
        (record.isDesktop && isShowingDesktop) ||
        (record.isMobile && isShowingMobile)
    );

    if (
      !databases.length &&
      !frameworks.length &&
      !languages.length &&
      !libraries.length &&
      !skills.length &&
      !tools.length
    ) {
      setRecords([...records]);
    } else {
      setRecords(
        records.filter(
          (record) =>
            record.languages.some((l) => languages.includes(l)) ||
            record.frameworks.some((f) => frameworks.includes(f)) ||
            record.libraries.some((l) => libraries.includes(l)) ||
            record.databases.some((d) => databases.includes(d)) ||
            record.skills.some((s) => skills.includes(s)) ||
            record.tools.some((t) => tools.includes(t))
        )
      );
    }
  }, [
    isShowingWork,
    isShowingDesktop,
    isShowingMobile,
    isAscending,
    databases,
    frameworks,
    languages,
    libraries,
    skills,
    tools,
  ]);

  return (
    <Container className={props.className}>
      <CategoryFilters
        onDatabasesFiltered={setDatabases}
        onFrameworksFiltered={setFrameworks}
        onLanguagesFiltered={setLanguages}
        onLibrariesFiltered={setLibraries}
        onSkillsFiltered={setSkills}
        onToolsFiltered={setTools}
        onPlatformChange={onPlatformChange}
      />
      <Main>
        <RecordHeader>
          <ToggleButtons>
            <ToggleButton
              isActive={!isShowingWork}
              onClick={() => setIsShowingWork(false)}
              title="Projects"
              icon={faProjectDiagram}
            />
            <ToggleButton
              isActive={isShowingWork}
              onClick={() => setIsShowingWork(true)}
              title="Work"
              icon={faBriefcase}
            />
          </ToggleButtons>
          <SortButton
            icon={isAscending ? faSortAmountUp : faSortAmountDown}
            onClick={() => {
              console.log("sort");
              setIsAscending(!isAscending);
            }}
          />
        </RecordHeader>
        {records.length ? (
          <RecordList records={records} />
        ) : (
          <NoRecordsMessage />
        )}
      </Main>
    </Container>
  );
};

export default Records;
