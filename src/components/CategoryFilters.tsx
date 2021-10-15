import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { Databases, Frameworks, Languages, Libraries, Skills, Tools } from "../categories";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import CategorySelect from "./CategorySelect";
import { useState } from "react";

interface CategoryFiltersProps {
  readonly className?: string;
  readonly onDatabasesFiltered: (databases: string[]) => void;
  readonly onFrameworksFiltered: (frameworks: string[]) => void;
  readonly onLanguagesFiltered: (languages: string[]) => void;
  readonly onLibrariesFiltered: (libraries: string[]) => void;
  readonly onSkillsFiltered: (skills: string[]) => void;
  readonly onToolsFiltered: (tools: string[]) => void;
}

const FilterContainer = styled.div<CategoryFiltersProps & {showFilters: boolean}>`
  max-height: ${({showFilters}) => showFilters ? '3000px' : '0px'};
  padding: ${({showFilters}) => showFilters ? '10px' : '0px'};
  padding-top: 0px;
  transition: all 0.5s ease-in-out;
  overflow: ${({showFilters}) => showFilters ? 'initial' : 'hidden'};
  opacity: ${({showFilters}) => showFilters ? '1' : '0'};
  min-width: 220px;
  overflow: visible;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    opacity: 1;
    max-height: 100%;
    padding: 10px;
    flex: 0 0 250px;
  }
`

const Container = styled.div`
  background-color: ${({theme}) => theme.filterBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  margin-bottom: 10px;
  transition: background-color 0.50s linear;
`

const FilterHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  min-width: 250px;
  width: 95%;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    display: none;
  }
`

const CategoryFilters: React.FC<CategoryFiltersProps> = (props) => {
  const {
    className, 
    onDatabasesFiltered, onFrameworksFiltered, onLanguagesFiltered, onLibrariesFiltered, onSkillsFiltered, onToolsFiltered
  } = props;
  const [showFilters, setShowFilters] = useState(false)

  return (
    <Container>
      <FilterHeader onClick={() => setShowFilters(!showFilters)}>
        <span>
          {showFilters ? 'Hide' : 'Show'} Filters
        </span>
        <FontAwesomeIcon icon={showFilters ? faCaretUp : faCaretDown}/>
      </FilterHeader>
      <FilterContainer {...props} className={className} showFilters={showFilters}>
        <h5>Languages</h5>
        <CategorySelect categories={Languages} onSelect={onLanguagesFiltered}/>
        <h5>Libraries</h5>
        <CategorySelect categories={Libraries} onSelect={onLibrariesFiltered}/>
        <h5>Frameworks</h5>
        <CategorySelect categories={Frameworks} onSelect={onFrameworksFiltered}/>
        <h5>Databases</h5>
        <CategorySelect categories={Databases} onSelect={onDatabasesFiltered}/>
        <h5>Tools</h5>
        <CategorySelect categories={Tools} onSelect={onToolsFiltered}/>
        <h5>Skills</h5>
        <CategorySelect categories={Skills} onSelect={onSkillsFiltered}/>
      </FilterContainer>
    </Container>
  );
}

export default CategoryFilters;