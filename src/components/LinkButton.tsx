import { faDownload, faLink, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faGithub, faNpm, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { Link } from "../types";
import Button, { ButtonProps } from "./Button";
import styled from 'styled-components';
import { MOBILE_BREAKPOINT_WIDTH } from '../utils';
import { useMediaQuery } from 'react-responsive';

interface LinkButtonProps extends ButtonProps {
  readonly link: Link;
}

const StyledButton = styled(Button)`
  min-width: 44px;
  max-width: 55px;
  min-height: 44px;
  border-width: 0;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    min-width: 175px;
    max-width: 250px;
  }
`

const icon = {
  'google_play': faGooglePlay,
  'npm': faNpm,
  'executable': faDownload,
  'website': faLink,
  'source_code': faGithub,
  'docs': faNewspaper,
  'youtube': faYoutube,
}

const text = {
  'google_play': 'Google Play',
  'npm': 'npm',
  'executable': 'Download',
  'website': 'Link',
  'source_code': 'Source',
  'docs': 'Documentation',
  'youtube': 'Demo',
}

const color = {
  'google_play': 'green',
  'npm': 'red',
  'executable': 'blue',
  'website': 'grey',
  'source_code': 'black',
  'docs': 'brown',
  'youtube': 'orange',
}

const LinkButton: React.FC<LinkButtonProps> = ({className, link}) => {
  // Show an icon-only button when in a mobile resolution
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_BREAKPOINT_WIDTH}px)` });
  return (
    <StyledButton className={className} icon={icon[link.type]} url={link.url} title={link.text ? link.text : (isMobile ? '' : text[link.type])} color={color[link.type]}/>
  );
}

export default LinkButton;