import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MultiValueRemove } from "react-select/dist/declarations/src/components/MultiValue";
import styled from "styled-components";

interface CheckboxProps {
  readonly className?: string;
  readonly label: string;
  readonly icon?: IconDefinition;
  readonly value: boolean;
  readonly onChange: (isChecked: boolean) => void;
}

const Icon = styled(FontAwesomeIcon)`
  padding-left: 5px;
  padding-right: 5px;
`

const Label = styled.label<{active: boolean}>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: center;
  align-items: center;
  color: ${({theme, active}) => active ? theme.text : theme.textInactive};
  border-color: ${({theme, active}) => active ? theme.buttonBorderActive : theme.buttonBorder};
  transition: color 0.50s linear;
`

const LabelWrapper = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`

const Container = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 5px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
  padding-left: 10px;
  padding-right: 5px;
`

const Checkbox: React.FC<CheckboxProps> = ({className, label, icon, value, onChange}) => {
  return (
    <Container className={className} onClick={() => onChange(!value)}>
      <Label active={value}>
        <StyledIcon icon={value ? faCheckCircle : faCircle} size={'lg'}/>
        <LabelWrapper>
          {icon && <Icon icon={icon}/>}
          {label}
        </LabelWrapper>
      </Label>
    </Container>
  );
}

export default Checkbox;