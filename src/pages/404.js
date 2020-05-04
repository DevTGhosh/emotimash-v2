import React from "react";

import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  console.log("abductionIllustration: ", typeof abductionIllustration);
  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <img
        alt="Ghost getting abducted by aliens"
        className="block mx-auto w-1/2"
        src={abductionIllustration}
      />
      <h2 className="bg-yellow-400 text-2xl font-bold inline-block self-start p-3 text-center">
        Looks like this page is a ghost that got abducted by aliens...
      </h2>
    </div>
  );
}

export default NotFoundPage;
