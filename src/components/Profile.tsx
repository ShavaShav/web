import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";

import Anchor from "./Anchor";
import Header from "./Header";
import Headshot from "./Headshot";
import { MOBILE_BREAKPOINT_WIDTH } from "../utils";
import { Subtitles } from "../data";

type ProfileProps = {
  readonly headerHeight: number;
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
};

const Container = styled.section<{ headerHeight: number }>`
  min-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
  background-color: ${({ theme }) => theme.profile};
  color: ${({ theme }) => theme.profileTint};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-direction: column;
  display: flex;
  transition: all 0.5s linear;
`;

const ProfileWrapper = styled.div<ProfileProps & { hide: boolean }>`
  width: "100%";
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.3s linear;
  margin-bottom: ${({ headerHeight }) => `${headerHeight}px`};
  // Keep profile on top of sticky header, and allow click throughs
  z-index: 5;
  pointer-events: none;
  padding-bottom: 33%;
`;

const ProfileSection = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 10px;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const rockingAnimation = keyframes`
  0%, 100%{transform: rotate(5deg) scale(1.03)}
  25%, 75%{transform: rotate(0deg) scale(1)}
  50%{transform: rotate(-5deg) scale(1.03)}
`;

const AnimatedHeadshot = styled(Headshot)`
  animation-name: ${rockingAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
`;

const ButtonGroup = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  min-width: 220px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + "px"}) {
    align-items: flex-start;
  }
`;

const HeaderTitle = styled.h1`
  font-size: clamp(2.5em, 6vw, 5em);
  padding: 0px;
  margin: 0px;
`

const TypewriterContainer = styled.h2`
  font-family: Ubuntu Mono;
  font-size: clamp(1.25em, 3vw, 2em);
  opacity: 0.75;
  padding: 0px;
  padding-top: 20px;
  margin: 0px;
`;

const LinkButton = styled(Anchor)`
  pointer-events: auto;
  height: 45px;
  width: 120px;
  margin: 5px;
  transition: border-color 0.5s linear, box-shadow: 0.1 linear;
  background: linear-gradient(transparent, rgba(44, 44, 44, 0.25)) top/100% 800%;
  border-color: transparent;
  border-radius: 5px;
  &:hover {
    border-color: ${({ theme }) => theme.profileBtn};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: initial;
  }
`;

const Profile = (props: ProfileProps) => {
  const [profileHeight, setProfileHeight] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [isPastProfile, setIsPastProfile] = useState(false);
  const profileRef = useRef<any>(null);

  useEffect(() => {
    if (profileRef?.current?.clientHeight)
      setProfileHeight(profileRef.current.clientHeight);
  }, [profileRef?.current?.clientHeight]);

  useEffect(() => {
    if (typeof document?.body !== "undefined") {
      const checkHeader = (e: any) => {
        if (e?.target?.scrollTop) {
          setShowHeader(e.target.scrollTop > profileHeight - 15);
          setIsPastProfile(e.target.scrollTop > profileHeight - 1);
        }
      };
      document.body.addEventListener("scroll", checkHeader);

      return () => document.body.removeEventListener("scroll", checkHeader);
    }
  }, [profileHeight]);

  return (
    <>
      <Header
        height={props.headerHeight}
        isDark={props.isDark}
        isShowing={showHeader}
        isAtTop={isPastProfile}
        toggleTheme={props.toggleTheme}
      />
      <Container headerHeight={props.headerHeight} ref={profileRef}>
        <ProfileWrapper {...props} hide={showHeader}>
          <ProfileSection>
            {/* <AnimatedHeadshot round size={225} /> */}
            <Title>
              <HeaderTitle>Zach Shaver</HeaderTitle>
              <TypewriterContainer>
                <Typewriter cursor cursorStyle="|" words={Subtitles} loop={0} />
              </TypewriterContainer>
            </Title>
          </ProfileSection>
          <ButtonGroup>
            <Row>
              <LinkButton
                icon={faGithub}
                color={"#555"}
                href="https://www.github.com/ShavaShav"
                title="Github"
              />
              <LinkButton
                icon={faEnvelope}
                color={"#607D8B"}
                href="mailto:dev@zachshaver.com"
                title="Contact"
              />
            </Row>
            <Row>
              <LinkButton
                icon={faLinkedin}
                color={"#1a6fb4"}
                href="https://ca.linkedin.com/in/zach-shaver"
                title="LinkedIn"
              />
              <LinkButton
                icon={faFilePdf}
                color={"#388E3C"}
                href="docs/resume.pdf"
                title="Resume"
              />
            </Row>
          </ButtonGroup>
        </ProfileWrapper>
      </Container>
    </>
  );
};

export default Profile;
