import { useState } from "react";
import styled from "styled-components";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Anchor, { AnchorProps } from "./Anchor";

const LinkButton = styled(Anchor)`
  pointer-events: auto;
  height: 45px;
  width: 45px;
  border-radius: 30px;
  margin: 5px;
  transition: border-color 0.5s linear, border-color 0.5s linear, width 0.1s ease-in-out;
  background: linear-gradient(transparent, rgba(44, 44, 44, 0.25)) top/100% 800%;
  border-color: transparent;
  border-radius: 50%;
  &:hover {
    border-color: ${({ theme }) => theme.profileBtn};
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.22),
      0 7px 20px 0 rgba(0, 0, 0, 0.19);
    // width: 100px;
    // border-radius: 30px;
  }
`;


type ChatButtonProps = AnchorProps & {
  readonly color?: string;
  readonly tintColor?: string;
}

const ChatButton = (props: ChatButtonProps) => {
  const [ isHover, setHover ] = useState(false);

  return (
    <LinkButton
      {...props}
      icon={faComment}
      color={"#1a6fb4"}
      href="https://chat.zachshaver.com"
      // title={isHover ? "Chat with Zach!" : ""}
      onMouseEnter={() => setTimeout(() => setHover(true), 100)}
      onMouseLeave={() => setHover(false)}
    />
  )
};

export default ChatButton;
