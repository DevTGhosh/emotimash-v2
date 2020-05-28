import React, { useContext } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import { store } from "../store";
import { mq, mqf } from "../utilities/ui";
import { startingEmoji, imgAltArr } from "../utilities/images";

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
      gridRowStart: `1`,
      gridRowEnd: `3`,
      gridColumn: `2/2`,
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
    cursor: `pointer`,
  },
  mqf({
    width: [`75px`, `90px`, `110px`],
    height: [`75px`, `90px`, `110px`],
  })
);
const emojiDispatch = (dispatch, index, selectedEmojiState) => {
  const len = selectedEmojiState.length;
  let valueExists = false;
  //checks if selected emoji already exists in the state
  for (let i = 0; i < len; i++) {
    const element = selectedEmojiState[i];
    if (element === index) {
      valueExists = true;
    }
  }
  if (len < 2 && !valueExists) {
    if (len < 1) {
      dispatch({ type: "SELECT_EMOJI", emojiIndex: index });
    } else if (len < 2) {
      dispatch({ type: "SELECT_EMOJI", emojiIndex: index });
    }
  } else if (len === 2 && !valueExists) {
    if (selectedEmojiState.includes(null)) {
      dispatch({ type: "SELECT_EMOJI", emojiIndex: index });
    } else {
      //Removing the 2nd emoji in the state & adding new emoji instead
      dispatch({ type: "REMOVE_EMOJI", selectEmoji: 1 });
      setTimeout(() => {
        dispatch({ type: "SELECT_EMOJI", emojiIndex: index });
      }, 200);
    }
  } else {
    return null;
  }
};

const EmojiSelection = () => {
  const globalState = useContext(store);
  const selectedEmojiState = globalState.state.emoji;
  const { dispatch } = globalState;
  return (
    <EmojiContainer>
      {startingEmoji.map((emoji, index) => {
        return (
          <EmojiImageDiv
            key={index}
            onClick={() => {
              emojiDispatch(dispatch, index, selectedEmojiState);
            }}
          >
            <img src={emoji} alt={imgAltArr[index]} />
          </EmojiImageDiv>
        );
      })}
    </EmojiContainer>
  );
};

export default EmojiSelection;
