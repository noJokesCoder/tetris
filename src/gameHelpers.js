import { TETROMINOS } from "./tetrominos";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // check that we are in tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // check that we are moving inside a playfield height(y)
          // check that we are not going off the bottom

          !stage[y + player.pos.y + moveY] ||
          // check that we are inside X axis
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check that the cell we are moving isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
