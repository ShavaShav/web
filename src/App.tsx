import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';
import Records from './components/Records';

const ScrollContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: proximity;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y proximity;
`

const StyledRecords = styled(Records)`
  scroll-margin-top: 60px;
  scroll-snap-align: start;
  /* background-color: blue; */
  scroll-snap-stop: always;
  height: 100%;
  scroll-margin-bottom: 50px;
`

const StyledProfile = styled(Profile)`
  scroll-snap-align: start;
  /* background-color: red; */
  height: 100vh;
  scroll-margin-top: 60px;
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ScrollContainer>
          <StyledProfile isDark={isDark} toggleTheme={toggleTheme}/>
          <StyledRecords/>
        </ScrollContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
