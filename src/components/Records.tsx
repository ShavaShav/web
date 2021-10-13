import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AllRecords } from "../data";
import CategoryFilters from "./CategoryFilters";
import RecordList from "./RecordList";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";


const Container = styled.div`
  /* scroll-snap-stop: always; */
  /* scroll-snap-align: start;
  scroll-margin-top: 60px; */
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    flex-direction: row;
  }
`

const FilterHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    display: none;
  }
`

const Records = (props: any) => {
  const [records, setRecords] = useState(AllRecords)
  const [databases, setDatabases] = useState<string[]>([])
  const [frameworks, setFrameworks] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [libraries, setLibraries] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [tools, setTools] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (!databases.length && !frameworks.length && !languages.length && !libraries.length && !skills.length && !tools.length) {
      setRecords(AllRecords)
    } else {
      setRecords(AllRecords.filter(record =>
        record.languages.some(l => languages.includes(l))
        || record.frameworks.some(f => frameworks.includes(f))
        || record.libraries.some(l => libraries.includes(l))
        || record.databases.some(d => databases.includes(d))
        || record.skills.some(s => skills.includes(s))
        || record.tools.some(t => tools.includes(t))
      ))
    }
  }, [databases, frameworks, languages, libraries, skills, tools])

  return (
    <Container className={props.className}>
      <FilterHeader onClick={() => setShowFilters(!showFilters)}>
        <span>
          {showFilters ? 'Hide' : 'Show'} Filters
        </span>
        <FontAwesomeIcon icon={showFilters ? faCaretUp : faCaretDown}/>
      </FilterHeader>
      <CategoryFilters 
        isExpanded={showFilters}
        onDatabasesFiltered={setDatabases}
        onFrameworksFiltered={setFrameworks}
        onLanguagesFiltered={setLanguages}
        onLibrariesFiltered={setLibraries}
        onSkillsFiltered={setSkills}
        onToolsFiltered={setTools}
      />
      <RecordList records={records}/>
    </Container>
  );
}

export default Records;