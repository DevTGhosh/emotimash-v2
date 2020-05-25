// import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { startingEmoji } from "./images";

const finalImage = () => {
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
              ...GatsbyImageSharpFixed
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
  for (i = 0; i < finalImageArray.length - 1; i++) {
    if (k < startingEmoji.length) {
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
