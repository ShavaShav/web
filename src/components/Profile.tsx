import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Headshot from "./Headshot";
import ThemeToggle from "./ThemeToggle";

type ProfileProps = {
  headerRoom: number;
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const headerHeight = 50;

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

const PushedRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`

const Profile = (props: ProfileProps) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkHeader = () => {
        setShowHeader(window.pageYOffset > window.innerHeight);
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
              <h2>Software Developer</h2>
            </Title>
          </ProfileSection>
        </ProfileWrapper>
      </Container>
      <Header height={headerHeight} isDark={props.isDark} isShowing={showHeader} toggleTheme={props.toggleTheme}/>
    </>
  );
}

export default Profile;