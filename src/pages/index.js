import React from "react";
import EmojiSelection from "../components/EmojiSelection";
import AdditionComponent from "../components/AdditionComponent";
import CombinationEmoji from "../components/CombinationEmoji";
import backgroundImage from "../images/background-image.png";

const index = () => {
  return (
    <div
      className="bg-repeat w-screen h-screen flex flex-initial flex-col items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <EmojiSelection />
      <AdditionComponent />
      <CombinationEmoji />
    </div>
  );
};

export default index;
