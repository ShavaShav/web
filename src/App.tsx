import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';
import Records from './components/Records';

const StyledRecords = styled(Records)`
  min-height: 100vh;
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Profile isDark={isDark} toggleTheme={toggleTheme}/>
        <StyledRecords/>
      </>
    </ThemeProvider>
  );
}

export default App;
