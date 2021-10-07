import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'

import Button from "./Button";
import Header from "./Header";
import Headshot from "./Headshot";
import ThemeToggle from "./ThemeToggle";

type ProfileProps = {
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const headerHeight = 50;

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
  transition: 0.50s linear;
`

const ProfileWrapper = styled.div<ProfileProps>`
  width: '100%';
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PushedRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  @media only screen and (min-width: 600px) {
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
      const checkHeader = () => {
        setShowHeader(window.pageYOffset > window.innerHeight - headerHeight);
      }
      window.addEventListener("scroll", checkHeader);
      return () => window.removeEventListener("scroll", checkHeader);
    }
  }, [window]);

  return (
    <>
      <Container>
        <PushedRight>
          <ThemeToggle isDark={props.isDark} onClick={props.toggleTheme}/>
        </PushedRight>
        <ProfileWrapper {...props}>
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
      <Header height={headerHeight} isDark={props.isDark} isShowing={showHeader} toggleTheme={props.toggleTheme}/>
    </>
  );
}

export default Profile;