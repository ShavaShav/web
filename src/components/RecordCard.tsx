import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBriefcase, faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { Databases, Frameworks, Languages, Libraries, Skills, Tools } from "../categories";
import { DivProps, Record } from "../types";
import CategoryLabel from "./CategoryLabel";
import LinkButton from "./LinkButton";

interface RecordCardProps {
  readonly key?: string;
  readonly className?: string;
  readonly record: Record;
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const PaddedRow = styled(Row)`
  padding: 0px 10px 10px;
`

const SpacedRow = styled(Row)`
  justify-content: space-between;
`

const ItemsGroup = styled(Row)`
  justify-content: center;
  flex-wrap: wrap;
`

const Title = styled.span`
  font-size: 1.25em;
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
  color: ${({theme}) => theme.cardTint};
  transition: all 0.50s linear;
  font-size: 1.1em;
  word-wrap: anywhere;
  padding-left: 5px;
`

const EmployerLine = styled(Row)`
  padding-top: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.cardBackground};
  color: ${({theme}) => theme.cardTint};
  justify-content: center;
  align-items: stretch;
  border-radius: 5px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  transition: all 0.50s linear;
`

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledLabel = styled(CategoryLabel)`
  margin: 1px;
`

const StyledLink = styled(LinkButton)`
  margin: 5px;
`

const Body = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.cardBody};
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid ${({theme}) => theme.cardBackground};
  transition: all 0.50s linear;
`

const Description = styled.div`
`

const PlatformIcon = styled(FontAwesomeIcon)`
  padding-left: 5px;
`

const Logo = styled.img`
  border-radius: 5px;
`

const DateBanner = styled.div`
  position: relative;
  top: 0;
  background-color: ${({theme}) => theme.dateBannerBackground};
  color: ${({theme}) => theme.dateBannerText};
  border: 3px solid ${({theme}) => theme.cardBackground};
  border-top-width: 2px;
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2px;
  padding: 5px;
  font-size: 0.8em;
  border-radius: 5px;
  transition: all 0.50s linear;
`

const RecordCard : React.FC<RecordCardProps & DivProps> = ({className, record, key}) => {
  const {
    type, title, employer, summary, bullets, start, end, logo, 
    skills, databases, languages, frameworks, libraries, tools, isMobile, isDesktop, 
    links
  } = record;
  return (
    <Container className={className} key={key}>
      <DateBanner>
        <FontAwesomeIcon title="Date" icon={faCalendar}/>
        <Subtitle>
          {start.toLocaleDateString('default', { month: 'long', year: 'numeric'})}
          {end           
            ? ` to ${end.toLocaleDateString('default', { month: 'long', year: 'numeric'})}`
            : type === 'work' && ' to Present'
          }
        </Subtitle>
      </DateBanner>
      <PaddedRow>
        <Logo alt={employer} src={logo} width={100} height={100}/>
        <Headline>
          <SpacedRow>
            <Title>{title}</Title>
            <Row>
              {isDesktop && <PlatformIcon title="Desktop App" icon={faDesktop}/>}
              {isMobile && <PlatformIcon title="Mobile App" icon={faMobileAlt}/>}
            </Row>
          </SpacedRow>
          {employer 
            ? <EmployerLine>
                <FontAwesomeIcon title="Employer" icon={faBriefcase} color='#a18162' />
                <Subtitle>{employer}</Subtitle>
              </EmployerLine>
            : undefined
          }
        </Headline>
      </PaddedRow>
      <Body>
        <Description>
          <span>{summary}</span>
          <ul>
            {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
          </ul>
        </Description>
        <ItemsGroup>
          {links.map(link => <StyledLink key={link.url} link={link}/>)}
        </ItemsGroup>
      </Body>
      <CategorySection>
        <ItemsGroup>
          {skills.map(id => <StyledLabel key={id} data={Skills[id]}/>)}
          {languages.map(id => <StyledLabel key={id} data={Languages[id]}/>)}
          {libraries.map(id => <StyledLabel key={id} data={Libraries[id]}/>)}
          {frameworks.map(id => <StyledLabel key={id} data={Frameworks[id]}/>)}
          {databases.map(id => <StyledLabel key={id} data={Databases[id]}/>)}
          {tools.map(id => <StyledLabel key={id} data={Tools[id]}/>)}
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