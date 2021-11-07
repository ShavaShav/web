import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import ThemeToggle from "./ThemeToggle";
import Headshot from "./Headshot";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  readonly height: number;
  readonly isAtTop: boolean; // If profile is not longer visible, and only header is showing
  readonly isShowing: boolean; // whether we should show the header or not
  readonly isDark: boolean;
  readonly toggleTheme: Dispatch<SetStateAction<void>>;
}

const Container = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  padding: 0px 10px;
  background-color: ${({ theme }) => theme.profile};
  display: flex;
  flex-direction: row;
  z-index: 3;
  box-shadow: ${({ isAtTop }) =>
    isAtTop
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.09)"
      : 0};
  transition: background-color 0.5s linear;
  align-items: center;
`;

const Hider = styled.div<HeaderProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.profileTint};
  position: relative;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  top: ${({ isShowing, height }) => (isShowing ? 0 : `-${height}px`)};
  height: ${({ height }) => `${height}px`};
  transition: all 0.2s ease-in-out, color 0.5s linear;
`;

const HeaderTitle = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 30px;
  white-space: nowrap;
`;

const StyledHeadshot = styled(Headshot)`
  padding-left: 5;
  padding-right: 5px;
`;

const Link = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: none;
  }
`;

const LinkIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  opacity: 0.65;
  &:focus,
  &:hover,
  &:active {
    opacity: 1;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`

const OptionalButton = styled(Row)<{ breakpoint: string }>`
  opacity: 0;
  max-width: 0px;
  transition: all 0.1s linear;
  @media only screen and (min-width: ${({ breakpoint }) => breakpoint}) {
    opacity: 1;
    max-width: 700px;
  }
`;

const StyledThemeToggle = styled(ThemeToggle)`
  height: 46px;
  width: 46px;
  opacity: 0.8;
  &:hover,
  &:active {
    opacity: 1;
  }
`;
const LinkButton: React.FC<{
  breakpoint: string;
  icon: IconDefinition;
  url: string;
}> = ({ breakpoint, icon, url }) => (
  <OptionalButton breakpoint={breakpoint}>
    <Link href={url}>
      <LinkIcon size={"2x"} icon={icon} />
    </Link>
  </OptionalButton>
);

const Header = (props: HeaderProps) => {
  return (
    <Container {...props}>
      <Hider {...props}>
        <Row>
          <StyledHeadshot size={50} />
          <HeaderTitle>Zach Shaver</HeaderTitle>
        </Row>
        <Nav>
          <LinkButton
            breakpoint={"500px"}
            url="docs/resume.pdf"
            icon={faFilePdf}
          />
          <LinkButton
            breakpoint={"450px"}
            url="mailto:dev@zachshaver.com"
            icon={faEnvelope}
          />
          <LinkButton
            breakpoint={"400px"}
            url="https://ca.linkedin.com/in/zach-shaver"
            icon={faLinkedin}
          />
          <LinkButton
            breakpoint={"350px"}
            url="https://www.github.com/ShavaShav"
            icon={faGithub}
          />
        </Nav>
      </Hider>
      <StyledThemeToggle isDark={props.isDark} onClick={props.toggleTheme} />
    </Container>
  );
};

export default Header;
