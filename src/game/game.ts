// class Game {
// currentPlayerId: number;
// numPlayers: number;
// gridSize: number;
// gameArray: number[];

// constructor(currentPlayerId: number, numPlayers: number, gridSize: number) {
//   numPlayers = numPlayers;
//   currentPlayerId = currentPlayerId; // start from 1
//   gridSize = gridSize;
//   gameArray = Game.createGrid(gridSize);
// }

export type gameArray = number[];

export function checkRowWin(
  gameArray: number[],
  currentPlayerId: number,
  gridSize: number  
): boolean {
  for (let i = 0; i < gridSize; i++) {
    // Check each row
    let hasCompleteRow = true
    
    for (let k = 0; k < gridSize; k++) {
      if (gameArray[gridSize * i + k] != currentPlayerId){
        hasCompleteRow = false
        break
      }
    }
    if (hasCompleteRow) return true
  }
  
  return false
}

export function checkColumnWin(
  gameArray: number[],
  currentPlayerId: number,
  gridSize: number  
): boolean {
  for (let i = 0; i < gridSize; i++) {
    let hasCompleteColumn = true;
    for (let k = 0; k < gridSize; k++) {
      if (gameArray[i + gridSize * k] != currentPlayerId){
        hasCompleteColumn = false
        break
      }
    }
    if (hasCompleteColumn) return true
  }

  return false
}

export function checkDiagonalWin(
  gameArray: number[],
  currentPlayerId: number,
  gridSize: number
  ) :boolean {
  let hasDiagaonalLeft = true;
  for (let i = 0; i < gridSize; i++) {
    const leftIndex = gridSize * i + i;
    hasDiagaonalLeft =
      gameArray[leftIndex] === currentPlayerId ? hasDiagaonalLeft : false;
    if (!hasDiagaonalLeft) break;
  }

  if (hasDiagaonalLeft) return true;

  let hasDiagonalRight = true;
  for (let i = 0; i < gridSize; i++) {
    const rightIndex = gridSize * i + (gridSize - 1) - i;
    hasDiagonalRight =
      gameArray[rightIndex] === currentPlayerId ? hasDiagonalRight : false;
    if (!hasDiagonalRight) break;
  }

  if (hasDiagonalRight) return true;

  return false
}


export function checkWin(
  gameArray: number[],
  currentPlayerId: number,
  gridSize: number
): boolean {
  // Check for current player
  // console.log("done")
  const hasWon = checkRowWin(gameArray, currentPlayerId, gridSize) ||
    checkColumnWin(gameArray, currentPlayerId, gridSize) ||
    checkDiagonalWin(gameArray, currentPlayerId, gridSize)

  return hasWon
}



export function getNextPlayerId(
  currentPlayerId: number,
  numPlayers: number
): number {
  return (currentPlayerId + 1) % numPlayers;
}

// Return success setting
export function setCell(gameArray: number[], index: number, playerId: number) {
  gameArray[index] = playerId;
  return gameArray
}
