import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  readonly height?: number;
  readonly isShowing: boolean;
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const Container = styled.div<HeaderProps>`
  transition: background-color 0.50s linear;
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: ${({theme}) => theme.profile};
`

const Hider = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.text};
  position: relative;
  opacity: ${({isShowing}) => isShowing ? 1 : 0};
  top: ${({isShowing, height}) => isShowing ? 0 : `-${height}px`};
  height: ${({height}) => `${height}px`};
  transition: all 0.3s linear;
`

const HeaderTitle = styled.div`
  font-size: 7vw;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const Header = (props: HeaderProps) => {
  return (
    <Container {...props}>
      <Hider {...props}>
        <HeaderTitle>Zach Shaver</HeaderTitle>
        <ButtonGroup>
          <Link href="https://www.github.com/ShavaShav">
            <LinkIcon size={'lg'} icon={faGithub}/>
          </Link>
          <LinkIcon size={'lg'} icon={faLinkedin}/>
          <ThemeToggle isDark={props.isDark} onClick={props.toggleTheme}/>
        </ButtonGroup>
      </Hider>
    </Container>
  );
}

export default Header;