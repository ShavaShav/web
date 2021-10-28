import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly icon?: IconDefinition;
  readonly size?: 'md'|'lg';
  readonly secondary?: boolean;
  readonly title?: string;
  readonly color?: string;
  readonly tintColor?: string;
  readonly isVertical? : boolean;
}

const Title = styled.span`
  text-align: center;
  padding: 2px;
  font-size: 0.9em;
`

const TitleIcon = styled.div<{isVertical: boolean}>`
  display: flex;
  flex: 1;
  flex-direction: ${({isVertical}) => isVertical ? 'column' : 'row'};
  /* flex-wrap: wrap; */
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  color: white;
  padding: 2px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  padding: 2px;
`

const StyledAnchor = styled.a<AnchorProps>`
  background-color: ${({color}) => color}!important;
  color: ${({tintColor}) => tintColor};
  cursor: pointer;
  text-align: center;
  align-content: center;
  text-decoration: inherit;
  color: inherit;
  justify-content: center;
  display: block;
  background: linear-gradient(transparent,rgba(124, 85, 85, 0.6)) top/100% 800%;
  padding: 5px;
  transition: all 0.50s linear, background 0.1s linear;
  &:hover, &:active {
    background-position:bottom;
    border-color: ${({theme}) => theme.buttonBorderActive};
  }
`

const Anchor = (props: AnchorProps) => {
  return (
    <StyledAnchor {...props} href={props.href}>
      <TitleIcon isVertical={props.isVertical || false}>
        {props.icon && <StyledIcon size={'lg'} icon={props.icon} color={props.tintColor}/>}
        {props.title ? <Title>{props.title}</Title> : undefined}
      </TitleIcon>
      {props.children}
    </StyledAnchor>
  )
};

export default Anchor;