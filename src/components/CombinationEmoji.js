import React from "react";
import styled from "@emotion/styled";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
import { mq } from "../ui";

const CombinationContainer = styled.div({
  background: `red`,
  width: `75%`,
  height: `15.625rem`,
  margin: `2rem 0 1rem 0`,
  [mq[2]]: {
    gridColumnStart: `2`,
  },
});

const CombinationEmoji = () => {
  // const data = useStaticQuery(graphql`
  //   query Images {
  //     allFile(filter: { relativeDirectory: { eq: "" } }) {
  //       nodes {
  //         id
  //         childImageSharp {
  //           fixed(height: 200) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <CombinationContainer>
      <h1>Combination Component</h1>
      {/* {data.allFile.nodes.map((image) => {
        console.log("image: ", image);
        return (
          <Img
            key={image.id}
            fixed={image.childImageSharp.fixed}
            alt="Final Emoji"
          />
        );
      })} */}
    </CombinationContainer>
  );
};

export default CombinationEmoji;
