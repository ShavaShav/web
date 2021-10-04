import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

import { Link } from "../types";
import Button, { ButtonProps } from "./Button";
import styled from 'styled-components';

interface LinkButtonProps extends ButtonProps {
  readonly link: Link;
}

const StyledButton = styled(Button)`
  border-width: 0;
`

const icon = {
  'google_play': faGooglePlay,
  'executable': faDownload,
  'website': faLink,
}

const text = {
  'google_play': 'Google Play',
  'executable': 'Download',
  'website': 'Link',
}

const color = {
  'google_play': 'green',
  'executable': 'blue',
  'website': 'grey',
}

const LinkButton: React.FC<LinkButtonProps> = ({className, link}) => {
  return (
    <StyledButton className={className} icon={icon[link.type]} url={link.url} title={text[link.type]} color={color[link.type]}/>
  );
}

export default LinkButton;