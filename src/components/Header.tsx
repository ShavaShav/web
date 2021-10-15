import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ThemeToggle from "./ThemeToggle";
import Headshot from "./Headshot";

interface HeaderProps {
  readonly height: number;
  readonly isAtTop: boolean; // If profile is not longer visible, and only header is showing
  readonly isShowing: boolean; // whether we should show the header or not
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const Container = styled.div<HeaderProps>`
  transition: background-color 0.50s linear;
  position: sticky;
  top: 0;
  padding: 0px 10px;
  background-color: ${({theme}) => theme.profile};
  display: flex;
  flex-direction: row;
  z-index: 2;
  box-shadow: ${({isAtTop}) => isAtTop ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : 0};
  transition: all 0.50s linear;
`

const Hider = styled.div<HeaderProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.profileTint};
  position: relative;
  opacity: ${({isShowing}) => isShowing ? 1 : 0};
  top: ${({isShowing, height}) => isShowing ? 0 : `-${height}px`};
  height: ${({height}) => `${height}px`};
  transition: all 0.3s ease-in, color 0.50s linear;
`

const HeaderTitle = styled.div`
  font-size: 1.5em;
  padding-left: 10px;
`

const Link = styled.a`
  &:focus, &:hover, &:visited, &:link, &:active {
    color: inherit;
    text-decoration: none;
  }
`

const LinkIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledThemeToggle = styled(ThemeToggle)`
  margin-top: 8px;
`

const Header = (props: HeaderProps) => {
  return (
    <Container {...props}>
      <Hider {...props}>
        <Row>
          <Headshot size={44}/>
          <HeaderTitle>Zach Shaver</HeaderTitle>
        </Row>
        <Row>
          <Link href="https://www.github.com/ShavaShav">
            <LinkIcon size={'2x'} icon={faGithub}/>
          </Link>
          <Link href="https://ca.linkedin.com/in/zach-shaver">
            <LinkIcon size={'2x'} icon={faLinkedin}/>
          </Link>
        </Row>
      </Hider>
      <StyledThemeToggle isDark={props.isDark} onClick={props.toggleTheme}/>
    </Container>
  );
}

export default Header;