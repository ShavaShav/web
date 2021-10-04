import styled from "styled-components";
import { Frameworks, Languages } from "../data";
import { DivProps, Link, Record } from "../types";
import Label from "./Label";
import LinkButton from "./LinkButton";

interface RecordCardProps {
  readonly className?: string;
  readonly record: Record;
}

const Title = styled.span`
  font-weight: bold;
`

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.cardTint};
  padding: 5px;
  justify-content: center;
  align-items: center;
`

const ItemsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledLabel = styled(Label)`
  margin: 2px;
`

const StyledLink = styled(LinkButton)`
  margin: 2px;
`

const RecordCard : React.FC<RecordCardProps & DivProps> = ({className, record}) => {
  const {
    type, title, employer, description, start, end, logo, 
    skills, languages, frameworks, libraries, platforms, 
    links, screenshot, sourceCode, docs
  } = record;
  return (
    <Container className={className}>
      <img alt={employer} src={logo} width={100} height={100}/>
      <Title>{title}</Title>
      {employer ? <span> @ {employer}</span> : undefined}
      <p>{description}</p>
      <ItemsGroup>
        {links.map(link => <StyledLink link={link}/>)}
      </ItemsGroup>
      <ItemsGroup>
        {languages.map(id => {
          const language = Languages[id]
          return <StyledLabel alt={language.name} iconSrc={language.image}>{language.name}</StyledLabel>
        })}
      </ItemsGroup>
      <ItemsGroup>
        {frameworks.map(id => {
          const framework = Frameworks[id]
          return <StyledLabel alt={framework.name} iconSrc={framework.image}>{framework.name}</StyledLabel>
        })}
      </ItemsGroup>
    </Container>
  );
}

export default RecordCard;