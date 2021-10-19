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
  min-height: ${() => `calc(340px - ${headerHeight}px)`};
  height: ${() => `calc(100vh - ${headerHeight}px)`};
  background-color: ${({theme}) => theme.profile};
  color: ${({theme}) => theme.profileTint};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  align-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (orientation: portrait) {    
    flex-direction: column;
  }
`

const ResizingHeadshot = styled(Headshot)`
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  min-width: 220px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    align-items: flex-start;
  }
`

const LinkButton = styled(Button)`
  height: 40px;
  width: 100px;
  margin: 5px;
  /* border: 0; */
  border-color: ${({theme}) => theme.profileBtn};
  transition: all 0.50s linear;
  &:hover {
    border-color: ${({theme}) => theme.profileBtnActive};
  }
`

const Profile = (props: ProfileProps) => {
  const [showHeader, setShowHeader] = useState(false);
  const [isPastProfile, setIsPastProfile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkHeader = () => {
        setShowHeader(window.pageYOffset > window.innerHeight - headerHeight - 25);
        setIsPastProfile(window.pageYOffset > window.innerHeight - headerHeight);
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
      <StyledHeader height={headerHeight} isDark={props.isDark} isShowing={showHeader} isAtTop={isPastProfile} toggleTheme={props.toggleTheme}/>
      <Container>
        <ProfileWrapper {...props} hide={showHeader}>
          <ProfileSection>
            <ResizingHeadshot round size={150}/>
            <Title>
              <h1>Zach Shaver</h1>
              <h2>
                <Typewriter cursor cursorStyle="|" words={subtitles} loop={0}/>
              </h2>
            </Title>
          </ProfileSection>
          <Row>
            <LinkButton icon={faGithub} color={'#333'} url='https://www.github.com/ShavaShav' title="Github"/>
            <LinkButton icon={faLinkedin} color={'#3F51B5'} url='https://ca.linkedin.com/in/zach-shaver' title="LinkedIn"/>
          </Row>
        </ProfileWrapper>
      </Container>
    </>
  );
}

export default Profile;