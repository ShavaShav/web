import { useEffect, useState } from "react";
import styled from "styled-components";
import { AllRecords } from "../data";
import { Record } from "../types";
import CategoryFilters from "./CategoryFilters";
import RecordList from "./RecordList";

const Container = styled.div`

`

const Records = (props: any) => {
  const [records, setRecords] = useState<Record[]>(AllRecords)
  const [databases, setDatabases] = useState<string[]>([])
  const [frameworks, setFrameworks] = useState<string[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [libraries, setLibraries] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])

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
      <CategoryFilters 
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