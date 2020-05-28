import React, { useContext } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { store } from "../store";
import { mq, mqf } from "../utilities/ui";
import emojiList from "../utilities/finalImage";

const CombinationContainer = styled.div(
  {
    background: `#FFF5F5`,
    margin: `2rem 0 1rem 0`,
    border: `1px dashed #333333`,
    boxSizing: `border-box`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    borderRadius: `30px`,
    display: `grid`,
    placeItems: `center`,
    [mq[2]]: {
      gridColumn: `3/3`,
      margin: `0`,
    },
  },
  mqf({
    width: [`15.625rem`, `18.75rem`],
    height: [`15.625rem`, `18.75rem`],
  })
);

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
const getImageName = (filename) => {
  let name = "";
  // makes sure img alt is not shown in the small time it takes to load the image
  setTimeout(() => {}, 1000);
  // removes the first 4 characters used to sort the files
  name = filename.slice(4);

  return name;
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
        <Img
          fadeIn={true}
          fixed={image.childImageSharp.fixed}
          alt={getImageName(image.name)}
        />
      ) : null}
    </CombinationContainer>
  );
};

export default CombinationEmoji;
