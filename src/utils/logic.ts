export function checkWin(array: string[], size: number, turn: string) {
  // See horizontal
  for (let i = 0; i < size; i++) {
    // for each column, check
    if (
      array[0 + i * size] === turn &&
      array[1 + i * size] === turn &&
      array[2 + i * size] === turn
    ) {
      return turn;
    }
  }

  // See vertical
  for (let i = 0; i < size; i++) {
    if (
      array[0 + size] === turn &&
      array[3 + i] === turn &&
      array[6 + i] === turn
    ) {
      return turn;
    }
  }

  // See diagonal
  if (array[0] === turn && array[4] === turn && array[8] === turn) {
    return turn;
  }

  // See diagonal
  if (array[2] === turn && array[4] === turn && array[6] === turn) {
    return turn;
  }
  // check for empty cells
  for (let i = 0; i < 9; i++) {
    if (array[i] === "") {
      return "";
    }
  }

  // No cell empty, return draw
  return "draw";
}
