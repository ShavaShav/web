import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
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
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Logo = styled.img`
  height: 150px;
`

const PushedRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
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
            <Logo alt="Zach Shaver" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" />
            <div>
              <h1>Zach Shaver</h1>
              <h2>Software Developer</h2>
            </div>
          </ProfileSection>
        </ProfileWrapper>
      </Container>
      <Header height={headerHeight} isDark={props.isDark} isShowing={showHeader} toggleTheme={props.toggleTheme}/>
    </>
  );
}

export default Profile;