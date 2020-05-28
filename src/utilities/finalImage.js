// import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { startingEmoji } from "./images";

const finalImage = () => {
  //fetches the image data in ascending order according to name
  const data = useStaticQuery(graphql`
    query Images {
      allFile(
        sort: { fields: [name], order: ASC }
        filter: { relativeDirectory: { eq: "" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fixed(height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `);
  let i,
    j = 0;
  let k = 1;
  let finalImageArray = data.allFile.nodes;
  const emojiArray = [];
  //Puts images in a new array sorted according to index
  // So Final image 1-3 is emojiArray[0][2]
  for (i = 0; i < finalImageArray.length; i++) {
    if (k < startingEmoji.length) {
      //if new emoji index set it to an empty oject you mutate this object latee to add image data
      if (k === 1) {
        emojiArray[j] = {};
      }
      emojiArray[j][k] = finalImageArray[i];
      k++;
    } else {
      j++;
      k = j + 1;
      emojiArray[j] = {};
      emojiArray[j][k] = finalImageArray[i];
      k++;
    }
  }
  return emojiArray;
};

export default finalImage;
