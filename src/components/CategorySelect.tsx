import { useState } from "react";
import Select, {
  ActionMeta,
  components,
  MultiValue,
  MultiValueGenericProps,
  OptionProps,
  StylesConfig,
} from "react-select";
import { useTheme } from "styled-components";
import { CategoryData } from "../types";
import CategoryLabel from "./CategoryLabel";

interface CategorySelectProps {
  readonly className?: string;
  readonly categories: Record<string, CategoryData>;
  readonly onSelect: (values: string[]) => void;
}

interface CategoryDataOption {
  categoryData: CategoryData;
  value: string;
  label: string;
}

const MultiValueLabel = (props: MultiValueGenericProps<any>) => {
  return (
    <components.MultiValueLabel {...props}>
      <CategoryLabel data={props.data.categoryData} />
    </components.MultiValueLabel>
  );
};

const Option = (props: OptionProps<any>) => {
  return (
    <components.Option {...props}>
      <CategoryLabel data={props.data.categoryData} />
    </components.Option>
  );
};

const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  onSelect,
}) => {
  const [selected, setSelected] = useState<MultiValue<CategoryDataOption>>();
  const theme = useTheme();

  const handleChange = (
    selection: MultiValue<CategoryDataOption>,
    actionMeta: ActionMeta<CategoryDataOption>
  ) => {
    setSelected(selection);
    onSelect(selection.map((data) => data.value));
  };

  const options: CategoryDataOption[] = [];
  Object.entries(categories).forEach(([value, data]) => {
    options.push({
      categoryData: data,
      value: value,
      label: data.name,
    });
  });

  const customStyles: StylesConfig<CategoryDataOption, true> = {
    control: (styles, { selectProps, isFocused }: any) => ({
      ...styles,
      background: selectProps._theme.filterDropdown,
      transition: "all 0.50s linear",
      border: `1px solid ${selectProps._theme.buttonBorder}`,
      borderRadius: "0px",
      boxShadow: "none",
      "&:hover": {
        border: `1px solid ${selectProps._theme.buttonBorderActive}`,
      },
    }),
    menuList: (styles, { isFocused }: any) => ({
      ...styles,
      // kill the white space on first and last option
      padding: 0,
    }),
    menuPortal: (styles) => ({
      ...styles,
      zIndex: 10,
    }),
    option: (styles, { isFocused, selectProps }: any) => ({
      ...styles,
      background: isFocused
        ? selectProps._theme.filterOptionActive
        : selectProps._theme.filterDropdown,
      fontSize: "1em",
    }),
    multiValue: (styles, { selectProps }: any) => ({
      ...styles,
      background: "transparent",
      fontSize: "1.15em",
    }),
    multiValueRemove: (styles, { selectProps }: any) => ({
      ...styles,
      "&:hover": {
        backgroundColor: "transparent",
      },
    }),
    noOptionsMessage: (styles, { selectProps }: any) => ({
      ...styles,
      background: selectProps._theme.filterDropdown,
    }),
    placeholder: (styles, { selectProps }: any) => ({
      ...styles,
      color: selectProps._theme.buttonBorder,
      fontSize: "0.8em",
    }),
  };

  return (
    <Select
      isMulti
      blurInputOnSelect={false}
      isSearchable={false}
      styles={customStyles}
      options={options}
      value={selected}
      onChange={handleChange}
      components={{
        MultiValueLabel,
        Option,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      // @ts-ignore
      _theme={theme}
      closeMenuOnSelect={false}
    />
  );
};

export default CategorySelect;
