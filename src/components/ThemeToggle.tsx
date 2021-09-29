import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

interface ThemeToggleProps {
  readonly isDark: boolean;
  readonly onClick: () => void;
}

const ToggleButton = styled.button`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10%;
` 

const ThemeToggle = (props: ThemeToggleProps) => {
  return (
    <ToggleButton onClick={props.onClick}>
      <FontAwesomeIcon icon={props.isDark ? faMoon : faSun}/>
    </ToggleButton>
  );
}

export default ThemeToggle;