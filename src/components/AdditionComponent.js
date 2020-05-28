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
    width: [`100px`, `120px`],
  })
);
const EmojiImg = styled.img(
  {
    filter: `drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1)) drop-shadow( 0px 2px 2px rgba(0, 0, 0, 0.3))`,
    cursor: `pointer`,
  },
  mqf({
    width: [`90px`, `115px`],
  })
);

const removeEmoji = (index, dispatch) => {
  dispatch({ type: "REMOVE_EMOJI", selectEmoji: index });
  if (index === 0) {
    // if removing first emoji we insert null and then reverse the array to get [null,index]
    dispatch({ type: "REVERSE_EMOJI" });
  }
};
const arrayHasIndex = (array, index) => {
  //return false if null or empty; is used to return empty div and remove image tag from dom; bug in safari
  return (
    // eslint-disable-next-line no-prototype-builtins
    Array.isArray(array) && array.hasOwnProperty(index) && array[index] !== null
  );
};

const AdditionComponent = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const emojiIndex = [...globalState.state.emoji];

  return (
    <AdditionContainer>
      <SelectedImageDiv>
        {arrayHasIndex(emojiIndex, 0) ? (
          <EmojiImg
            src={startingEmoji[emojiIndex[0]]}
            alt={imgAltArr[emojiIndex[0]]}
            onClick={() => removeEmoji(0, dispatch)}
          />
        ) : (
          <div></div>
        )}
      </SelectedImageDiv>
      <AdditionImageDiv>
        <img
          css={mqf({ width: [`55px`, `65px`] })}
          src={AdditionImage}
          alt="Plus Icon"
        />
      </AdditionImageDiv>
      <SelectedImageDiv>
        {arrayHasIndex(emojiIndex, 1) ? (
          <EmojiImg
            src={startingEmoji[emojiIndex[1]]}
            alt={imgAltArr[emojiIndex[1]]}
            onClick={() => removeEmoji(1, dispatch)}
          />
        ) : (
          <div></div>
        )}
      </SelectedImageDiv>
    </AdditionContainer>
  );
};

export default AdditionComponent;
