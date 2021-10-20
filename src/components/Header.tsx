import { Dispatch, SetStateAction } from "react";
import styled, { keyframes } from "styled-components";
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
  position: sticky;
  top: 0;
  padding: 0px 10px;
  background-color: ${({theme}) => theme.profile};
  display: flex;
  flex-direction: row;
  z-index: 2;
  box-shadow: ${({isAtTop}) => isAtTop ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : 0};
  transition: background-color 0.50s linear;
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


const rotateAnimation = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`

const HeadshotRays = styled.div`
  position: relative;
  display: grid;
  animation-name: ${rotateAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: -1;
  transform-origin: 200px;
  &:before {
    content:"";
    background-image: repeating-conic-gradient(#FFF59D 0 9deg, transparent 9deg 18deg);
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 400px;
    height: 400px;
    /* transform: translateX(-50%) translateY(-50%); */
    box-shadow: inset 125px -125px 100px 0px ${({theme}) => theme.profile}, 
              inset -125px 125px 100px 0px ${({theme}) => theme.profile};
    transition: box-shadow 0.50s linear;
  }
  &:after {

  }
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
      {/* <HeadshotRays/> */}
      <StyledThemeToggle isDark={props.isDark} onClick={props.toggleTheme}/>
    </Container>
  );
}

export default Header;