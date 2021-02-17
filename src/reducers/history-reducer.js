export default (state = [], action) => {
  const { index, value, stepNumber} = action
  switch(action.type) {
    case 'ADD_MOVE':
      let newState = [...state];
      let nextMove = newState[newState.length-1];
      let squares = nextMove.squares.slice();
      squares[index] = value;
      let newSquare = squares;
      let newHistory = newState.concat([{squares: newSquare}]);
      return newHistory;
    case 'OLD_STEP':
      let currentHistory = [...state];
      let upToStep = currentHistory.slice(0, stepNumber + 1);
      return upToStep;
    default:
      return state;
  }
}

//hist array of object
//add another object to
// key : value array of squares's values
