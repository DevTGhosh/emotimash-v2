import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
// import facepaint from "facepaint";
import EmojiSelection from "../components/EmojiSelection";
import AdditionComponent from "../components/AdditionComponent";
import CombinationEmoji from "../components/CombinationEmoji";
import { mq } from "../ui";
import backgroundImage from "../images/background-image.png";

const HomeContainer = styled.div(
  // write base styles that apply to all viewports
  {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: `repeat`,
    backgroundSize: `auto`,
    width: `100vw`,
    display: `flex`,
    flex: `0 1 auto`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    height: `100%`,
    [mq[0]]: {},
    [mq[2]]: {
      display: `grid`,
      gridTemplateColumns: `45% 55%`,
      gridTemplateRows: `50% 50%`,
      gridGap: `5rem`,
      height: `100vh`,
    },
  }
  // (mqf({
  //   // allow small screens to scroll if not enough height rest should be contained in viewport
  //   height: ["100%", "100vh"],
  // })),
);

const index = () => {
  return (
    <>
      {/* normalize css that applys to global emaotion styles */}
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            background: white;
            font-family: sans-serif;
          }
        `}
      />
      <HomeContainer>
        <EmojiSelection />
        <AdditionComponent />
        <CombinationEmoji />
      </HomeContainer>
    </>
  );
};

export default index;
