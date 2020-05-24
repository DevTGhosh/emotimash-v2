import React, { useContext } from "react";
import styled from "@emotion/styled";
// eslint-disable-next-line no-unused-vars
import { jsx } from "@emotion/core";
import { store } from "../store";
import AdditionImage from "../images/plus.svg";
import { startingEmoji, imgAltArr } from "../utilities/images";
import { mqf } from "../utilities/ui";

const AdditionContainer = styled.div(
  {
    display: `flex`,
    alignItems: `flex-end`,
    maxWidth: `500px`,
  },
  mqf({
    justifyContent: [`space-between`, `space-around`],
    width: [`83.33%`, `75%`, `70%`, `100%`],
    height: [`100px`, `120px`],
    gridColumn: [`none`, `none`, `none`, `3/3`],
  })
);
const AdditionImageDiv = styled.div({
  width: `75px`,
  height: `inherit`,
  display: `flex`,
  justifyContent: `space-around`,
});
const SelectedImageDiv = styled.div(
  {
    height: `inherit`,
    borderBottom: `4px solid #2D3748`,
    boxShadow: `-6px 0 white, 6px 0 white, 0px 2px 4px rgba(0, 0, 0, 0.2)`,
    display: `grid`,
    justifyContent: `center`,
    alignContent: `start`,
  },
  mqf({
    // margin: [`0 0`, `0 0`, `0 0`, `0 0.5rem`],
    width: [`100px`, `120px`],
  })
);
const EmojiImg = styled.img(
  {
    filter: `drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1)) drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.3))`,
  },
  mqf({
    width: [`90px`, `115px`],
  })
);

const AdditionComponent = () => {
  const globalState = useContext(store);
  const emojiIndex = globalState.state.emoji;

  return (
    <AdditionContainer>
      <SelectedImageDiv>
        <EmojiImg
          src={startingEmoji[emojiIndex[0]]}
          alt={imgAltArr[emojiIndex[0]]}
        />
      </SelectedImageDiv>
      <AdditionImageDiv>
        <img
          css={mqf({ width: [`55px`, `65px`] })}
          src={AdditionImage}
          alt="Plus Icon"
        />
      </AdditionImageDiv>
      <SelectedImageDiv>
        <EmojiImg
          src={startingEmoji[emojiIndex[1]]}
          alt={imgAltArr[emojiIndex[1]]}
        />
      </SelectedImageDiv>
    </AdditionContainer>
  );
};

export default AdditionComponent;
