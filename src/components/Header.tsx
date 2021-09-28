import styled from "styled-components";


interface HeaderProps {
  readonly isShowing: boolean;
}

const HeaderDiv = styled.div<HeaderProps>`
  /* background-color: white; */
  background-color: ${({theme}) => theme.profile};
  border-bottom: ${({isShowing, theme}) => isShowing ? `1px solid ${theme.text}` : '0px solid transparent'};
  color: ${({isShowing, theme}) => isShowing ? theme.text : 'transparent'};
  min-height: ${({isShowing}) => isShowing ? '20px' : '80px'};
  transition: all 0.3s, background-color 0.50s linear;
  position: sticky;
  top: 0;
`

const HeaderTitle = styled.div`
  font-size: 7vw;
`

const Header = (props: HeaderProps) => {
  return (
    <HeaderDiv {...props}>
      <HeaderTitle>Zach Shaver</HeaderTitle>
    </HeaderDiv>
  );
}

export default Header;