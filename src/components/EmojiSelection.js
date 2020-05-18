import React from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import { mq } from "../ui";

const EmojiContainer = styled.div({
  background: `#38a169`,
  margin: `3rem 0`,
  width: `83.33%`,
  height: `18.75rem`,
  [mq[2]]: {
    gridRowStart: 1,
    gridRowEnd: 2,
  },
});

const EmojiSelection = () => {
  return <EmojiContainer>EmojiSelection Component</EmojiContainer>;
};

export default EmojiSelection;
