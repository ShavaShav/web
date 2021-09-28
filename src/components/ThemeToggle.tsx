import { useDarkMode } from "../useDarkMode";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button onClick={toggleTheme}>{theme}</button>
  );
}

export default ThemeToggle;