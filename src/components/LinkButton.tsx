import { faDownload, faLink, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'

import { Link } from "../types";
import Button, { ButtonProps } from "./Button";
import styled from 'styled-components';

interface LinkButtonProps extends ButtonProps {
  readonly link: Link;
}

const StyledButton = styled(Button)`
  min-width: 175px;
  min-height: 35px;
  border-width: 0;
`

const icon = {
  'google_play': faGooglePlay,
  'npm': faNpm,
  'executable': faDownload,
  'website': faLink,
  'source_code': faGithub,
  'docs': faNewspaper,
}

const text = {
  'google_play': 'Google Play',
  'npm': 'npm',
  'executable': 'Download',
  'website': 'Link',
  'source_code': 'Source',
  'docs': 'Documentation',
}

const color = {
  'google_play': 'green',
  'npm': 'red',
  'executable': 'blue',
  'website': 'grey',
  'source_code': 'black',
  'docs': 'brown',
}

const LinkButton: React.FC<LinkButtonProps> = ({className, link}) => {
  return (
    <StyledButton className={className} icon={icon[link.type]} url={link.url} title={text[link.type]} color={color[link.type]}/>
  );
}

export default LinkButton;