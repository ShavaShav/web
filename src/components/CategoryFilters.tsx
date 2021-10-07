import styled from "styled-components";
import { Databases, Frameworks, Languages, Libraries, Skills } from "../categories";
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
  height: ${({isExpanded}) => isExpanded ? 0 : 'auto'};
  padding: 10px;
`

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  className, isExpanded, onDatabasesFiltered, onFrameworksFiltered, onLanguagesFiltered, onLibrariesFiltered, onSkillsFiltered
}) => {
  return (
    <Container {...props} className={className}>
      <h5>Languages</h5>
      <CategorySelect categories={Languages} onSelect={onLanguagesFiltered}/>
      <h5>Skills</h5>
      <CategorySelect categories={Skills} onSelect={onSkillsFiltered}/>
      <h5>Libraries</h5>
      <CategorySelect categories={Libraries} onSelect={onLibrariesFiltered}/>
      <h5>Frameworks</h5>
      <CategorySelect categories={Frameworks} onSelect={onFrameworksFiltered}/>
      <h5>Databases</h5>
      <CategorySelect categories={Databases} onSelect={onDatabasesFiltered}/>
    </Container>
  );
}

export default CategoryFilters;