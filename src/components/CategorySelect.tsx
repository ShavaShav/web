import { useState } from "react";
import Select, { ActionMeta, components, MultiValue, MultiValueGenericProps, OptionProps } from 'react-select';
import styled from "styled-components";
import { CategoryData } from "../types";
import CategoryLabel from './CategoryLabel';

interface CategorySelectProps {
  readonly className?: string;
  readonly categories: Record<string, CategoryData>;
  readonly onSelect: (values: string[]) => void;
}

interface CategoryDataOption {
  categoryData: CategoryData;
  value: string;
  label: string,
}

const StyledSelect = styled(Select)`
  background-color: ${({theme}) => theme.body};
  margin: 5px;
`

const MultiValueLabel = (props: MultiValueGenericProps<any>) => {
  return (
    <components.MultiValueLabel {...props}>
      <CategoryLabel data={props.data.categoryData}/>
    </components.MultiValueLabel>
  )
};

const Option = (props: OptionProps<any>) => {
  return (
    <components.Option {...props}>
      <CategoryLabel data={props.data.categoryData}/>
    </components.Option>
  )
};

const CategorySelect: React.FC<CategorySelectProps> = ({categories, onSelect}) => {
  const [selected, setSelected] = useState<MultiValue<CategoryDataOption>>();

  const handleChange = (selection: MultiValue<CategoryDataOption>, actionMeta: ActionMeta<CategoryDataOption>) => {
    setSelected(selection)
    onSelect(selection.map(data => data.value))
  }

  const options: CategoryDataOption[] = [];
  Object.entries(categories).forEach(([value, data]) => {
    options.push({
      categoryData: data,
      value: value,
      label: data.name,
    })
  })

  return (
    <StyledSelect
      isMulti
      options={options}
      value={selected}
      onChange={handleChange}
      components={{ MultiValueLabel, Option }}
    />
  )
}

export default CategorySelect;