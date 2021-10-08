import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AllRecords } from "../data";
import { Record } from "../types";
import CategoryFilters from "./CategoryFilters";
import RecordList from "./RecordList";


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`

const FilterHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
`

const Records = (props: any) => {
  const [records, setRecords] = useState(AllRecords)
  const [databases, setDatabases] = useState<string[]>([])
  const [frameworks, setFrameworks] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [libraries, setLibraries] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (!databases.length && !frameworks.length && !languages.length && !libraries.length && !skills.length) {
      setRecords(AllRecords)
    } else {
      setRecords(AllRecords.filter(record =>
        record.languages.some(l => languages.includes(l))
        || record.frameworks.some(f => frameworks.includes(f))
        || record.libraries.some(l => libraries.includes(l))
        || record.databases.some(d => databases.includes(d))
        || record.skills.some(s => skills.includes(s))
      ))
    }
  }, [databases, frameworks, languages, libraries, skills])

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
      />
      <RecordList records={records}/>
    </Container>
  );
}

export default Records;