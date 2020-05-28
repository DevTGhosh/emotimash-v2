import React, { useContext } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { store } from "../store";
import { mq } from "../utilities/ui";
import emojiList from "../utilities/finalImage";

const CombinationContainer = styled.div({
  background: `red`,
  width: `75%`,
  height: `15.625rem`,
  margin: `2rem 0 1rem 0`,
  [mq[2]]: {
    gridColumn: `3/3`,
  },
});

const getFinalImage = (selectedEmojiState, finalEmojiArray) => {
  if (selectedEmojiState.length === 2 && !selectedEmojiState.includes(null)) {
    // sets emoji index in ascending order
    if (selectedEmojiState[0] > selectedEmojiState[1]) {
      let temp = selectedEmojiState[0];
      selectedEmojiState[0] = selectedEmojiState[1];
      selectedEmojiState[1] = temp;
    }
    let i = selectedEmojiState[0];
    let j = selectedEmojiState[1];
    return finalEmojiArray[i][j];
  } else {
    return false;
  }
};

const CombinationEmoji = () => {
  const globalState = useContext(store);
  // create a new array with state value
  const selectedEmojiState = [...globalState.state.emoji];
  // gets the return emojiArray
  const finalEmojiArray = emojiList();
  //return emoji name & src or false if doesn't exist
  const image = getFinalImage(selectedEmojiState, finalEmojiArray);
  //, useState, useEffect
  return (
    <CombinationContainer>
      {image ? (
        <Img fixed={image.childImageSharp.fixed} alt={image.name} />
      ) : null}
    </CombinationContainer>
  );
};

export default CombinationEmoji;
