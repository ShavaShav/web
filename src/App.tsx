import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyles from "./globalStyles";
import { useDarkMode } from "./hooks/useDarkMode";
import Profile from "./components/Profile";
import Records from "./components/Records";
import ChatButton from "./components/ChatButton";

const headerHeight = 70;

const StyledRecords = styled(Records)`
  scroll-margin-top: ${headerHeight}px;
  scroll-margin-bottom: 50px;
  height: 100%;

  @media screen and (min-width: 780px) and (min-height: 600px) {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }
`;

const StyledProfile = styled(Profile)`
  height: 100vh;
  scroll-margin-top: ${headerHeight}px;

  @media screen and (min-width: 780px) and (min-height: 600px) {
    scroll-snap-align: start;
  }
`;

const StyledChatButton = styled(ChatButton)<{isScrollBarVisible: boolean}>`
  position: absolute;
  bottom: 10px;
  right: ${(props) => props.isScrollBarVisible ? '25px' : '10px' };
  border-radius: 50%;
  padding: 10px;
  
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === "dark";

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <StyledProfile
          headerHeight={headerHeight}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <StyledRecords />
        <StyledChatButton
          isScrollBarVisible={window.visualViewport ? window.visualViewport.width < window.outerWidth : true} 
        />
      </>
    </ThemeProvider>
  );
};

export default App;
