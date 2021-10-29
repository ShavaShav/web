import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
}
body {
  /* height: 100vh; */
  /* overflow: hidden; */
  background-color: yellow;
}
`

const ScrollContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`

const SectionOne = styled.div`
  scroll-snap-align: start;
  background-color: red;
  height: 100vh;
`

const SectionTwo = styled.div`
  scroll-snap-align: start;
  background-color: blue;
  scroll-snap-stop: always;
  height: 100%;
  padding-bottom: 50px;
  /* heigh1t: 100vh; */
  /* overflow-y: scroll; */
`

const TestText = styled.p`
  height: 200px;
  background-color: green;
  color: white;
`

const ScrollTest = () => {
  return (
    <>
      <GlobalStyles />   
      <ScrollContainer>
        <SectionOne/>
        <SectionTwo>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
          <TestText>TESTING</TestText>
        </SectionTwo>
      </ScrollContainer>
    </>
  );
}

export default ScrollTest;
