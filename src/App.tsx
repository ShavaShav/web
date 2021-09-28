import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './globalStyles';
import { useDarkMode } from './useDarkMode';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Header from './components/Header';

const Main = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  height: 200vh;
`

const headerHeight = 40;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Profile headerRoom={headerHeight}/>
        <Header height={headerHeight} isDark={theme === 'dark'} isShowing={showHeader} toggleTheme={toggleTheme}/>
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
