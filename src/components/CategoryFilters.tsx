import styled from "styled-components";
import { Libraries } from "../categories";
import CategorySelect from "./CategorySelect";

interface CategoryFiltersProps {
  readonly className?: string;
}

const Container = styled.div`

`

const CategoryFilters: React.FC<CategoryFiltersProps> = ({className}) => {
  return (
    <Container className={className}>
      <CategorySelect categories={Libraries}/>
    </Container>
  );
}

export default CategoryFilters;