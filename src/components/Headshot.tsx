import { useEffect, useState } from "react";
import styled from "styled-components";
import headshot1Img from "../img/headshot_1.png";
import headshot2Img from "../img/headshot_2.png";

interface HeadshotProps {
  readonly size: number;
  readonly round?: boolean;
}

const HeadshotImage = styled.img<HeadshotProps>`
  height: ${({ size }) => `${size}px`};
  width: auto;
`;

const headshotImages = [
  headshot1Img,
  headshot2Img
]

const Headshot = (props: HeadshotProps) => {
  const [headshotIndex, setHeadshotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadshotIndex((headshotIndex + 1) % headshotImages.length)
    }, 3500);
    return () => clearInterval(interval);
  }, [headshotIndex]);

  return <HeadshotImage {...props} alt="Zach Shaver" src={headshotImages[headshotIndex]} />;
};

export default Headshot;
