import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

const Main = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  height: 200vh;
`

const TopRightThemeToggle = styled(ThemeToggle)`
  position: absolute;
  top: 0;
  right: 0;
`

const headerHeight = 40;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        {/* <TopRightThemeToggle isDark={isDark} onClick={toggleTheme}/> */}
        <Profile headerRoom={headerHeight} isDark={isDark} toggleTheme={toggleTheme}/>
        <Main>
        </Main>
        {/* <Profile/>
        <Projects>
          <button title={"Theme: " + theme} onClick={toggleTheme}>Hello</button>
        </Projects> */}
      </>
    </ThemeProvider>
  );
}

export default App;
