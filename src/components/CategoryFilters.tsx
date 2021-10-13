import styled from "styled-components";
import { Databases, Frameworks, Languages, Libraries, Skills } from "../categories";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import CategorySelect from "./CategorySelect";

interface CategoryFiltersProps {
  readonly className?: string;
  readonly isExpanded?: boolean;
  readonly onDatabasesFiltered: (databases: string[]) => void;
  readonly onFrameworksFiltered: (frameworks: string[]) => void;
  readonly onLanguagesFiltered: (languages: string[]) => void;
  readonly onLibrariesFiltered: (libraries: string[]) => void;
  readonly onSkillsFiltered: (skills: string[]) => void;
}

const Container = styled.div<CategoryFiltersProps>`
  background-color: ${({theme}) => theme.filterBackground};
  max-height: ${({isExpanded}) => isExpanded ? '3000px' : '0px'};
  padding: ${({isExpanded}) => isExpanded ? '10px' : '0px'};
  transition: all 0.5s ease-in-out;
  overflow: ${({isExpanded}) => isExpanded ? 'initial' : 'hidden'};
  opacity: ${({isExpanded}) => isExpanded ? '1' : '0'};
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    opacity: 1;
    max-height: 100%;
    padding: 10px;
    flex: 0 0 250px;
  }
`

const CategoryFilters: React.FC<CategoryFiltersProps> = (props) => {
  const {
    className, isExpanded, 
    onDatabasesFiltered, onFrameworksFiltered, onLanguagesFiltered, onLibrariesFiltered, onSkillsFiltered
  } = props;
  return (
    <Container {...props} className={className}>
      <h5>Languages</h5>
      <CategorySelect categories={Languages} onSelect={onLanguagesFiltered}/>
      <h5>Libraries</h5>
      <CategorySelect categories={Libraries} onSelect={onLibrariesFiltered}/>
      <h5>Frameworks</h5>
      <CategorySelect categories={Frameworks} onSelect={onFrameworksFiltered}/>
      <h5>Databases</h5>
      <CategorySelect categories={Databases} onSelect={onDatabasesFiltered}/>
      <h5>Skills</h5>
      <CategorySelect categories={Skills} onSelect={onSkillsFiltered}/>
    </Container>
  );
}

export default CategoryFilters;