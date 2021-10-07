import styled from "styled-components";

interface _COMPONENTProps {
  readonly className?: string;
}

const Container = styled.div`

`

const _COMPONENT: React.FC<_COMPONENTProps> = ({className}) => {
  return (
    <Container className={className}>
      
    </Container>
  );
}

export default _COMPONENT;