import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

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
    <div>
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
    </div>
  );
};

export default CombinationEmoji;
