import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';
import Records from './components/Records';

const StyledRecords = styled(Records)`
  /* scroll-snap-align: start; */
  /* scroll-snap-align: end; */
  /* min-height: 100vh; */
`

const StyledProfile = styled(Profile)`
  /* scroll-snap-align: start; */
  /* min-height: 100vh; */
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />   
        <StyledProfile isDark={isDark} toggleTheme={toggleTheme}/>
        <StyledRecords/>
      </>
    </ThemeProvider>
  );
}

export default App;
