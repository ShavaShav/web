import styled from 'styled-components';
import headshotImg from '../img/headshot.png';

interface HeadshotProps {
  readonly size: number;
  readonly round?: boolean;
}

const HeadshotImage = styled.img<HeadshotProps>`
  border-radius: ${({round}) => round ? '50%' : '10%'};
  border: ${({theme}) => `1px solid ${theme.profileTint}`};
  height: ${({size}) => `${size}px`};
  width: ${({size}) => `${size}px`};
`

const Headshot = (props: HeadshotProps) => {
  return <HeadshotImage {...props} alt="Zach Shaver" src={headshotImg} />
}

export default Headshot;