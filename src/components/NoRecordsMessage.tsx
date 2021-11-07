import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface NoRecordsMessageProps {
  readonly className?: string;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const EmptyIcon = styled(FontAwesomeIcon)`
  opacity: 0.65;
`;

const NoRecordsText = styled.p`
  text-align: center;
`;

const NoRecordsMessage: React.FC<NoRecordsMessageProps> = ({ className }) => {
  return (
    <Container className={className}>
      <EmptyIcon icon={faFolderOpen} size={"2x"} />
      <NoRecordsText>
        Sorry, there is nothing matching the selected filters, yet!
      </NoRecordsText>
    </Container>
  );
};

export default NoRecordsMessage;
