import { useState } from "react";
import Select, { MultiValue } from 'react-select';
import styled from "styled-components";
import { CategoryData } from "../types";

interface CategorySelectProps {
  readonly className?: string;
  readonly categories: Record<string, CategoryData>;
  // readonly selected: string[];
}

const Container = styled.div`

`

const StyledSelect = styled(Select)`
  background-color: ${({theme}) => theme.body};
`

const CategorySelect: React.FC<CategorySelectProps> = ({categories}) => {
  const [selected, setSelected] = useState<MultiValue<any>>();

  const options: Option[] = [];
  Object.entries(categories).forEach(([value, data]) => {
    options.push({
      value: value,
      label: data.name
    })
  })

  // const selectedOptions = [];
  // selected.forEach(value => {
  //   selectedOptions.push({
  //     value: value,
  //     labels: categories[value]
  //   })
  // })
  console.log(options);
  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <StyledSelect
        isMulti
        options={options}
        value={selected}
        onChange={setSelected}
      />
    </div>
  )
}

export default CategorySelect;