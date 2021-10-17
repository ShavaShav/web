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
  min-width: 44px;
  max-width: 55px;
  min-height: 44px;
  border-width: 0;
  border-radius: 5px;
  @media only screen and (min-width: ${MOBILE_BREAKPOINT_WIDTH + 'px'}) {
    min-width: 140px;
    max-width: 180px;
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
  'google_play': '#009688',
  'npm': '#F44336',
  'executable': '#00897B',
  'website': '#3F51B5',
  'source_code': '#455A64',
  'docs': '#AB47BC',
  'youtube': '#FF7043',
}

const LinkButton: React.FC<LinkButtonProps> = ({className, link}) => {
  // Show an icon-only button when in a mobile resolution
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_BREAKPOINT_WIDTH}px)` });
  return (
    <StyledButton className={className} icon={icon[link.type]} url={link.url} title={link.text ? link.text : (isMobile ? '' : text[link.type])} color={color[link.type]}/>
  );
}

export default LinkButton;