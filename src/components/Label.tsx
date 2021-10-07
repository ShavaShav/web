import styled, { useTheme } from "styled-components";
import { DivProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Theme } from "../themes";

interface LabelProps {
  readonly alt: string;
  readonly iconFA?: IconDefinition;
  readonly iconSrc?: string;
  readonly rounded?: boolean;
}

const Icon = styled.div`
  padding-right: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: ${({theme}) => theme.labelTint};
  font-size: 0.8em;
  padding: 8px;
`

const Label: React.FC<LabelProps & DivProps> = ({className, alt, iconFA, iconSrc, title, children}) => {
  const theme = useTheme() as Theme;
  return (
    <Container className={className}>
      <Icon>
        {iconFA && <FontAwesomeIcon size={'sm'} icon={iconFA} color={theme.labelTint}/>}
        {iconSrc ? <img alt={alt} src={iconSrc} height={18}/> : undefined}
      </Icon>
      {children}
    </Container>
  );
}

export default Label;