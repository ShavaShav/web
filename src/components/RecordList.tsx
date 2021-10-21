import styled from "styled-components";
import { DivProps, Record } from "../types";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import RecordCard from "./RecordCard";

interface RecordListProps {
  readonly records: Record[];
}

const Container = styled.div`
  padding: 15px 5px 15px;
  /* background-color: ${({theme}) => theme.body}; */
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    /* grid-template-rows: repeat(auto-fill, minmax(450px, auto)); */
    padding: 20px 10px 10px 20px;
    /* display:flex;
    flex-direction: row;
    flex-wrap: wrap; */
  }
`

const StyledRecordCard = styled(RecordCard)`
  margin: 8px;
  /* margin-top: 15px; */
  margin-bottom: 45px;
  /* width: 0; */
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  /* min-width: 500px; */
  /* @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    min-width: 500px;
  } */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  top: 0;
  transition: top ease 0.5s, box-shadow 0.5s linear;
  border: 1px solid transparent;
  @media (hover: hover) and (pointer: fine) {
    &:hover { 
      top: -7px;
      border-color: ${({theme}) => theme.cardBorderActive};
      box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2), 0 10px 30px 0 rgba(0, 0, 0, 0.19);
    }
  }
`

const RecordList : React.FC<RecordListProps & DivProps> = ({records, className}) => {
  return (
    <Container className={className}>
      {records.map((record, index) => <StyledRecordCard key={`record_${record.start.toISOString}_${record.title}`} record={record}/>)}
    </Container>
  );
}

export default RecordList;