import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'

import Button from "./Button";
import Header from "./Header";
import Headshot from "./Headshot";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";

type ProfileProps = {
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const headerHeight = 60;

const subtitles = [
  'Software Developer',
  'Git Guru',
  'DevOps Demon'
]

const Container = styled.div`
  height: ${() => `calc(100vh - ${headerHeight}px)`};
  background-color: ${({theme}) => theme.profile};
  flex-direction: column;
  display: flex;
  transition: all 0.50s linear;
  /* scroll-snap-align: start;
  scroll-margin-top: 60px; */
`

const StyledHeader = styled(Header)`
  /* scroll-snap-align: start; */
`

const ProfileWrapper = styled.div<ProfileProps & {hide: boolean}>`
  width: '100%';
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({hide}) => hide ? 0 : 1};
  transition: opacity 0.3s linear;
  margin-bottom: ${headerHeight}px;
  // Keep profile on top of sticky header, and allow click throughs
  z-index: 10;
  pointer-events: none;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    flex-direction: row;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    align-items: flex-start;
    width: 220px;
  }
`

const LinkButton = styled(Button)`
  height: 40px;
  width: 100px;
  margin: 5px;
`

const Profile = (props: ProfileProps) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkHeader = (e) => {
        setShowHeader(window.pageYOffset > window.innerHeight - headerHeight - 25);
      }
      window.addEventListener("scroll", checkHeader);
      return () => window.removeEventListener("scroll", checkHeader);
    }
  }, [window]);

  // useEffect(() => {
  //   if (typeof document?.body !== "undefined") {
  //     const checkHeader = (e) => {
  //       setShowHeader(e.target.scrollTop > window.innerHeight - headerHeight - 50);
  //     }
  //     document.body.addEventListener("scroll", checkHeader);
  //     return () => document.body.removeEventListener("scroll", checkHeader);
  //   }
  // }, [document.body]);

  return (
    <>
      <StyledHeader height={headerHeight} isDark={props.isDark} isShowing={showHeader} toggleTheme={props.toggleTheme}/>
      <Container>
        <ProfileWrapper {...props} hide={showHeader}>
          <ProfileSection>
            <Headshot round size={150}/>
            <Title>
              <h1>Zach Shaver</h1>
              <h2>
                <Typewriter cursor cursorStyle="|" words={subtitles} loop={0}/>
              </h2>
            </Title>
          </ProfileSection>
          <Row>
            <LinkButton icon={faGithub} color={'#333'} url='https://www.github.com/ShavaShav' title="Github"/>
            <LinkButton icon={faLinkedin} color={'#0077b5'} url='https://ca.linkedin.com/in/zach-shaver' title="LinkedIn"/>
          </Row>
        </ProfileWrapper>
      </Container>
    </>
  );
}

export default Profile;