import styled from "styled-components";
import { WorkRecords } from "../data";
import RecordList from "./RecordList";
import RecordsFilter from "./RecordsFilter";

const Container = styled.div`

`

const Records = (props: any) => {
  return (
    <Container className={props.className}>
      <RecordsFilter/>
      <RecordList records={WorkRecords}/>
    </Container>
  );
}

export default Records;