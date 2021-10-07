import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBriefcase, faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { Databases, Frameworks, Languages, Libraries, Skills } from "../categories";
import { DivProps, Record } from "../types";
import CategoryLabel from "./CategoryLabel";
import LinkButton from "./LinkButton";

interface RecordCardProps {
  readonly className?: string;
  readonly record: Record;
}

const Title = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`

const Subtitle = styled.span`
  padding-left: 5px;
`

const Headline = styled.div`
  display: flex;
  flex: 1;
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
  align-items: stretch;
`

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const SpacedRow = styled(Row)`
  justify-content: space-between;
`

const ItemsGroup = styled(Row)`
  justify-content: center;
  flex-wrap: wrap;
`

const StyledLabel = styled(CategoryLabel)`
  margin: 1px;
`

const StyledLink = styled(LinkButton)`
  flex: 1;
  margin: 5px;
  max-width: 225px;
`

const Body = styled.div`
  background-color: ${({theme}) => theme.body};
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid ${({theme}) => theme.cardBackground};
`

const Description = styled.div`
`

const PlatformIcon = styled(FontAwesomeIcon)`
  padding-left: 5px;
`

const RecordCard : React.FC<RecordCardProps & DivProps> = ({className, record}) => {
  const {
    type, title, employer, summary, bullets, start, end, logo, 
    skills, databases, languages, frameworks, libraries, isMobile, isDesktop, 
    links, screenshot
  } = record;
  return (
    <Container className={className}>
      <Row>
        <img alt={employer} src={logo} width={100} height={100}/>
        <Headline>
          <SpacedRow>
            <Title>{title}</Title>
            <Row>
              {isDesktop && <PlatformIcon title="Desktop App" icon={faDesktop}/>}
              {isMobile && <PlatformIcon title="Mobile App" icon={faMobileAlt}/>}
            </Row>
          </SpacedRow>
          {employer 
            ? <Row>
                <FontAwesomeIcon title="Employer" icon={faBriefcase} color='#C4A484' />
                <Subtitle>{employer}</Subtitle>
              </Row>
            : undefined
          }
          <Row>
            <FontAwesomeIcon title="Date" icon={faCalendar} color='#286086'/>
            <Subtitle>
              {start.toLocaleDateString('default', { month: 'long', year: 'numeric'})}
              {end           
                ? ` to ${end.toLocaleDateString('default', { month: 'long', year: 'numeric'})}`
                : type === 'work' && ' to Present'
              }
            </Subtitle>
          </Row>
        </Headline>
      </Row>
      <Body>
        <Description>
          <span>{summary}</span>
          <ul>
            {bullets.map(bullet => <li>{bullet}</li>)}
          </ul>
        </Description>
        <ItemsGroup>
          {links.map(link => <StyledLink link={link}/>)}
        </ItemsGroup>
      </Body>
      <CategorySection>
        <ItemsGroup>
          {skills.map(id => <StyledLabel data={Skills[id]}/>)}
          {languages.map(id => <StyledLabel data={Languages[id]}/>)}
          {libraries.map(id => <StyledLabel data={Libraries[id]}/>)}
          {frameworks.map(id => <StyledLabel data={Frameworks[id]}/>)}
          {databases.map(id => <StyledLabel data={Databases[id]}/>)}
        </ItemsGroup>
        {/* <Row>
          <CategoryHeader>Languages</CategoryHeader>
          <ItemsGroup>
            {languages.map(id => <StyledLabel data={Languages[id]}/>)}
          </ItemsGroup>
        </Row>
        <ItemsGroup>
          {frameworks.map(id => <StyledLabel data={Frameworks[id]}/>)}
        </ItemsGroup>
        <ItemsGroup>
          {databases.map(id => <StyledLabel data={Databases[id]}/>)}
        </ItemsGroup> */}
        {/* <ItemsGroup>
          {skills.map(id => <CategoryLabel data={Skills[id]}/>)}
        </ItemsGroup> */}
      </CategorySection>
    </Container>
  );
}

export default RecordCard;