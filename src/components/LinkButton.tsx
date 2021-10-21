import { faDownload, faGlobe, faLink, faNewspaper } from '@fortawesome/free-solid-svg-icons'
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
  /* flex-grow: 1; */
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  border-width: 0;
  border-radius: 5px;
  &:hover {
    border-width: 1;
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2), 0 12px 25px 0 rgba(0,0,0,0.19);
  }
  transition: box-shadow 0.2s ease-in-out;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    min-width: 140px;
    max-width: 180px;
    min-height: 45px;
  }
`

const icon = {
  'google_play': faGooglePlay,
  'npm': faNpm,
  'executable': faDownload,
  'website': faGlobe,
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
  'google_play': '#388E3C',
  'npm': '#E53935',
  'executable': '#757575',
  'website': '#3F51B5',
  'source_code': '#37474F',
  'docs': '#795548',
  'youtube': '#B71C1C',
}

const LinkButton: React.FC<LinkButtonProps> = ({className, link}) => {
  // Show an icon-only button when in a mobile resolution
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_BREAKPOINT_WIDTH}px)` });
  return (
    <StyledButton className={className} icon={icon[link.type]} url={link.url} title={link.text ? link.text : (isMobile ? '' : text[link.type])} color={color[link.type]}/>
  );
}

export default LinkButton;