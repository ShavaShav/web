import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon?: IconDefinition;
  readonly size?: 'md'|'lg';
  readonly secondary?: boolean;
  readonly title?: string;
  readonly color?: string;
  readonly tintColor?: string;
  readonly url?: string;
}

const Title = styled.span`
  text-align: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
  padding-right: 5px;
  padding-left: 5px;
`

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({color}) => color};
  color: ${({tintColor}) => tintColor};
  cursor: pointer;
  align-content: center;
`

const Button = (props: ButtonProps) => {
  const onClick = (ev: any) => { 
    if (props.url)
      window.location.href = props.url
    else if (props.onClick)
      props.onClick(ev)
  }
  return (
    <StyledButton {...props} onClick={onClick}>
      {props.icon && <StyledIcon size={'lg'} icon={props.icon} color={props.tintColor}/>}
      {props.title ? <Title>{props.title}</Title> : undefined}
    </StyledButton>
  )
};

export default Button;