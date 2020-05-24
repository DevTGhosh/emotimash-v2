import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
// import facepaint from "facepaint";
import EmojiSelection from "../components/EmojiSelection";
import AdditionComponent from "../components/AdditionComponent";
import CombinationEmoji from "../components/CombinationEmoji";
import { mq } from "../utilities/ui";
import { StateProvider } from "../store";
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
    [mq[0]]: {
      height: `100vh`,
      justifyContent: `space-around`,
    },
    [mq[2]]: {
      display: `grid`,
      gridTemplateColumns: `0.25fr 1fr 1fr 0.25fr`,
      gridTemplateRows: `50% 50%`,
      alignContent: `space-around`,
      justifyItems: `center`,
    },
  }
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
      <StateProvider>
        <HomeContainer>
          <EmojiSelection />
          <AdditionComponent />
          <CombinationEmoji />
        </HomeContainer>
      </StateProvider>
    </>
  );
};

export default index;
