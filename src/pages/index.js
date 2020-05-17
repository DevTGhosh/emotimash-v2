import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import EmojiSelection from "../components/EmojiSelection";
import AdditionComponent from "../components/AdditionComponent";
import CombinationEmoji from "../components/CombinationEmoji";
import backgroundImage from "../images/background-image.png";

const HomeContainer = styled.div({
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: `repeat`,
  backgroundSize: `auto`,
  width: `100vw`,
  height: `100%`,
  display: `flex`,
  flex: `0 1 auto`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `flex-start`,
});

const index = () => {
  return (
    <>
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
