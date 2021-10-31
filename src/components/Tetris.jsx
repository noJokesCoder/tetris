import React from "react";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// components
import Stage from "./Stage";
import StartButton from "./StartButton";
import Display from "./Display";
import { createStage } from "./../gameHelpers";

const Tetris = () => {
  console.log(createStage);
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
