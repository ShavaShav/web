import styled from "styled-components";
import { DivProps, Record } from "../types";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import RecordCard from "./RecordCard";

interface RecordListProps {
  readonly records: Record[];
}

const Container = styled.section`
  padding: 15px 5px 15px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + "px"}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    padding: 20px 10px 10px 20px;
  }
`;

const StyledRecordCard = styled(RecordCard)`
  margin: 8px;
  margin-bottom: 45px;
  box-shadow: 0;
  position: relative;
  top: 0;
  transition: top ease 0.5s, box-shadow 0.5s linear;
  border: 1px solid transparent;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      top: -5px;
      border-color: ${({ theme }) => theme.cardBorderActive};
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

const RecordList: React.FC<RecordListProps & DivProps> = ({
  records,
  className,
}) => {
  return (
    <Container className={className}>
      {records.map((record, index) => (
        <StyledRecordCard
          key={`record_${record.start.toISOString}_${record.title}`}
          record={record}
        />
      ))}
    </Container>
  );
};

export default RecordList;
