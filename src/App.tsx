import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyles from "./globalStyles";
import { useDarkMode } from "./hooks/useDarkMode";
import Profile from "./components/Profile";
import Records from "./components/Records";

const headerHeight = 70;

const StyledRecords = styled(Records)`
  scroll-margin-top: ${headerHeight}px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100%;
  scroll-margin-bottom: 50px;
`;

const StyledProfile = styled(Profile)`
  scroll-snap-align: start;
  height: 100vh;
  scroll-margin-top: ${headerHeight}px;
`;

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
      </>
    </ThemeProvider>
  );
};

export default App;
