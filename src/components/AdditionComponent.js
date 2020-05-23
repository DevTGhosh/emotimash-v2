import React, { useContext } from "react";
import styled from "@emotion/styled";
// eslint-disable-next-line no-unused-vars
import { jsx } from "@emotion/core";
import { store } from "../store";
import AdditionImage from "../images/plus.svg";
import { startingEmoji, imgAltArr } from "../utilities/images";
// import { mq } from "../ui";

const AdditionContainer = styled.div({
  height: `6rem`,
  width: `83.33%`,
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `flex-end`,
});
const AdditionImageDiv = styled.div({
  width: `75px`,
  height: `inherit`,
  display: `flex`,
  justifyContent: `space-around`,
});
const SelectedImageDiv = styled.div({
  width: `100px`,
  height: `inherit`,
  borderBottom: `4px solid #2D3748`,
  boxShadow: `-6px 0 white, 6px 0 white, 0px 2px 4px rgba(0, 0, 0, 0.2)`,
  display: `grid`,
  justifyContent: `center`,
  alignContent: `start`,
});
const EmojiImg = styled.img({
  width: `95px`,
  filter: `drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1)) drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.3))`,
});

const AdditionComponent = () => {
  const globalState = useContext(store);
  const emojiIndex = globalState.state[0].emoji;
  console.log("emojiIndex: ", emojiIndex);
  return (
    <AdditionContainer>
      <SelectedImageDiv>
        <EmojiImg
          src={startingEmoji[emojiIndex[0]]}
          alt={imgAltArr[emojiIndex[0]]}
        />
      </SelectedImageDiv>
      <AdditionImageDiv>
        <img css={{ width: `55px` }} src={AdditionImage} alt="Plus Icon" />
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
