import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import Button from './Button';

interface ThemeToggleProps {
  readonly className?: string;
  readonly isDark: boolean;
  readonly onClick: () => void;
}

const ToggleButton = styled(Button)`
  height: 44px;
  width: 44px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10%;
` 

const ThemeToggle = (props: ThemeToggleProps) => {
  return (
    <ToggleButton className={props.className} onClick={props.onClick} icon={props.isDark ? faMoon : faSun}/>
  );
}

export default ThemeToggle;