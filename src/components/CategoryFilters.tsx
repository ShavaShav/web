import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faDesktop, faFilter, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { Databases, Frameworks, Languages, Libraries, Skills, Tools } from "../categories";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import CategorySelect from "./CategorySelect";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface CategoryFiltersProps {
  readonly className?: string;
  readonly onDatabasesFiltered: (databases: string[]) => void;
  readonly onFrameworksFiltered: (frameworks: string[]) => void;
  readonly onLanguagesFiltered: (languages: string[]) => void;
  readonly onLibrariesFiltered: (libraries: string[]) => void;
  readonly onSkillsFiltered: (skills: string[]) => void;
  readonly onToolsFiltered: (tools: string[]) => void;
  readonly onPlatformChange: (isMobile: boolean, isDesktop: boolean) => void;
}

const FilterContainer = styled.div<CategoryFiltersProps & {showFilters: boolean}>`
  max-height: ${({showFilters}) => showFilters ? '3000px' : '0px'};
  padding: ${({showFilters}) => showFilters ? '10px' : '0px'};
  margin-bottom: 10px;
  padding-top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.5s ease-in-out;
  overflow: ${({showFilters}) => showFilters ? 'initial' : 'hidden'};
  opacity: ${({showFilters}) => showFilters ? '1' : '0'};
  min-width: 220px;
  overflow: visible;
  pointer-events: ${({showFilters}) => showFilters ? 'initial' : 'none'};
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    opacity: 1;
    max-height: 100%;
    max-width: 175px;
    padding: 10px;
    /* flex: 0 0 250px; */
    pointer-events: initial;
  }
`

const Container = styled.div<{showFilters: boolean}>`
  background-color: ${({theme}) => theme.filterBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  margin-bottom: 10px;
  transition: background-color 0.50s linear;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    // Bump filters up in z index so shadow is cast properly when in desktop mode
    z-index: 2
  }
`

const FilterHeader = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  min-width: 250px;
  width: 95%;
  font-size: 1em;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    display: none;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  flex: 1;
  border-radius: 0;
  min-width: 150px;
  background-color: ${({theme}) => theme.filterDropdown};
  border: 1px solid ${({theme}) => theme.buttonBorder};
  transition: all 0.50s linear;
`

const CategoryFilters: React.FC<CategoryFiltersProps> = (props) => {
  const {
    className, 
    onDatabasesFiltered, onFrameworksFiltered, onLanguagesFiltered, onLibrariesFiltered, onSkillsFiltered, onToolsFiltered, onPlatformChange
  } = props;
  const [showFilters, setShowFilters] = useState(false)
  const [showMobile, setShowMobile] = useState(true)
  const [showDesktop, setShowDesktop] = useState(true)

  useEffect(() => {
    onPlatformChange(showDesktop, showMobile)
  }, [onPlatformChange, showDesktop, showMobile])
  
  return (
    <Container showFilters={showFilters}>
      <FilterHeader icon={faFilter} onClick={() => setShowFilters(!showFilters)} title={showFilters ? 'Hide Filters' : 'Show Filters'}>
        <FontAwesomeIcon icon={showFilters ? faCaretUp : faCaretDown}/>
      </FilterHeader>
      <FilterContainer {...props} className={className} showFilters={showFilters}>
        <h4>Platform</h4>
        <CheckboxGroup>
          <StyledCheckbox label="Mobile" value={showMobile} icon={faMobileAlt} onChange={setShowMobile}/>
          <StyledCheckbox label="Desktop" value={showDesktop} icon={faDesktop} onChange={setShowDesktop}/>
        </CheckboxGroup>
        <h4>Languages</h4>
        <CategorySelect categories={Languages} onSelect={onLanguagesFiltered}/>
        <h4>Libraries</h4>
        <CategorySelect categories={Libraries} onSelect={onLibrariesFiltered}/>
        <h4>Frameworks</h4>
        <CategorySelect categories={Frameworks} onSelect={onFrameworksFiltered}/>
        <h4>Databases</h4>
        <CategorySelect categories={Databases} onSelect={onDatabasesFiltered}/>
        <h4>Tools</h4>
        <CategorySelect categories={Tools} onSelect={onToolsFiltered}/>
        <h4>Skills</h4>
        <CategorySelect categories={Skills} onSelect={onSkillsFiltered}/>
      </FilterContainer>
    </Container>
  );
}

export default CategoryFilters;