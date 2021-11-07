import styled from "styled-components";
import { DivProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface LabelProps {
  readonly alt: string;
  readonly iconFA?: IconDefinition;
  readonly iconSrc?: string;
  readonly rounded?: boolean;
}

const Icon = styled.div`
  padding-right: 5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.labelTint};
  transition: all 0.5s linear;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: ${({ theme }) => theme.labelTint};
  font-size: 0.8em;
  padding: 8px;
  transition: all 0.5s linear;
`;

const Label: React.FC<LabelProps & DivProps> = ({
  className,
  alt,
  iconFA,
  iconSrc,
  title,
  children,
}) => {
  return (
    <Container className={className}>
      <Icon>
        {iconFA && <StyledFontAwesomeIcon size={"sm"} icon={iconFA} />}
        {iconSrc ? <img alt={alt} src={iconSrc} height={18} width="auto" /> : undefined}
      </Icon>
      {children}
    </Container>
  );
};

export default Label;
