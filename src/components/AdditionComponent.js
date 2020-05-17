import React from "react";
import styled from "@emotion/styled";

const AdditionContainer = styled.div({
  background: `blue`,
  height: `6rem`,
  width: `83.33%`,
});
const AdditionComponent = () => {
  return (
    <AdditionContainer className="bg-blue-600 h-64 w-10/12">
      Addition Component
    </AdditionContainer>
  );
};

export default AdditionComponent;
