import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";


interface HeaderProps {
  readonly isShowing: boolean;
}

const HeaderDiv = styled.div<HeaderProps>`
  /* background-color: white; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.profile};
  /* border-bottom: ${({isShowing, theme}) => isShowing ? `1px solid ${theme.text}` : '0px solid transparent'}; */
  color: ${({isShowing, theme}) => isShowing ? theme.text : 'transparent'};
  min-height: ${({isShowing}) => isShowing ? '20px' : '80px'};
  transition: all 0.3s, background-color 0.50s linear;
  position: sticky;
  top: 0;
  padding: 10px;
`

const HeaderTitle = styled.div`
  font-size: 7vw;
`

const Header = (props: HeaderProps) => {
  return (
    <HeaderDiv {...props}>
      <HeaderTitle>Zach Shaver</HeaderTitle>
      <ThemeToggle/>
    </HeaderDiv>
  );
}

export default Header;