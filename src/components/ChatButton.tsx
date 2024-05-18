import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Anchor, { AnchorProps } from "./Anchor";

const LinkButton = styled(Anchor)`
  pointer-events: auto;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin: 5px;
  transition: all 0.5s linear;
  background: linear-gradient(transparent, rgba(44, 44, 44, 0.25)) top/100% 800%;
  border-color: transparent;
  border-radius: 50%;
  &:hover {
    border-color: ${({ theme }) => theme.profileBtn};
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.22),
      0 15px 40px 0 rgba(0, 0, 0, 0.19);
  }
`;


type ChatButtonProps = AnchorProps & {
  readonly color?: string;
  readonly tintColor?: string;
}

const ChatButton = (props: ChatButtonProps) => {
  return <LinkButton
    {...props}
    icon={faComment}
    color={"#1a6fb4"}
    href="https://chat.zachshaver.com"
  />
};

export default ChatButton;
