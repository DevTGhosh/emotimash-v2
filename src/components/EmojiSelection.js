import React from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import { mq } from "../utilities/ui";
import { startingEmoji } from "../utilities/images";

const EmojiContainer = styled.div({
  background: `#38a169`,
  margin: `3rem 0`,
  width: `83.33%`,
  height: `18.75rem`,
  display: `grid`,
  gridTemplateColumns: `repeat(3, 1fr)`,
  alignContent: `space-around`,
  justifyItems: `center`,
  [mq[2]]: {
    gridRowStart: 1,
    gridRowEnd: 3,
  },
});

const EmojiImageDiv = styled.div({
  width: `75px`,
  height: `75px`,
});
const Img = styled.img({
  background: `white`,
});

const EmojiSelection = () => {
  return (
    <EmojiContainer>
      {startingEmoji.map((emoji, index) => {
        return (
          <EmojiImageDiv key={index}>
            <Img src={emoji} />
          </EmojiImageDiv>
        );
      })}
    </EmojiContainer>
  );
};

export default EmojiSelection;
