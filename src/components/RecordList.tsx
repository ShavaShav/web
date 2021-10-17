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
  margin-bottom: 30px;
  /* width: 0; */
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  /* min-width: 500px; */
  /* @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    min-width: 500px;
  } */
`

const RecordList : React.FC<RecordListProps & DivProps> = ({records, className}) => {
  console.log("render records: ", records)
  return (
    <Container className={className}>
      {records.map((record, index) => <StyledRecordCard key={`record_${record.start.toISOString}_${record.title}`} record={record}/>)}
    </Container>
  );
}

export default RecordList;