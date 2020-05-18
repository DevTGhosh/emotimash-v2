import React from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import { mq, mqf } from "../utilities/ui";
import { startingEmoji } from "../utilities/images";

const EmojiContainer = styled.div(
  {
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
  },
  mqf({
    width: [`20rem`, `30rem`, `30rem`, `40rem`],
    height: [`18.75rem`, `25rem`, `30rem`, `40rem`],
  })
);

const EmojiImageDiv = styled.div(
  {
    width: `75px`,
    height: `75px`,
    background: `white`,
  },
  mqf({
    width: [`75px`, `90px`, `110px`],
    height: [`75px`, `90px`, `110px`],
  })
);
const Img = styled.img({});

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
