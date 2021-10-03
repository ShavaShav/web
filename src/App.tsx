import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';

const Main = styled.div`
  margin-top: 50px;
  height: 200vh;
`

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Profile isDark={isDark} toggleTheme={toggleTheme}/>
        <Main>
          <p>Hello</p>
        </Main>
      </>
    </ThemeProvider>
  );
}

export default App;
