import styled from "styled-components";
import { DivProps, Record } from "../types";
import RecordCard from "./RecordCard";

interface RecordListProps {
  readonly records: Record[];
}

const Container = styled.div`
  background-color: 'blue';
`

const StyledRecordCard = styled(RecordCard)`
  margin: 5px;
`

const RecordList : React.FC<RecordListProps & DivProps> = ({records, className}) => {
  return (
    <Container className={className}>
      {records.map(record => <StyledRecordCard record={record}/>)}
    </Container>
  );
}

export default RecordList;