import styled from "styled-components";
import { AllRecords } from "../data";
import RecordList from "./RecordList";
import RecordsFilter from "./RecordsFilter";

const Container = styled.div`

`

const Records = (props: any) => {
  return (
    <Container className={props.className}>
      <RecordsFilter/>
      <RecordList records={AllRecords}/>
    </Container>
  );
}

export default Records;