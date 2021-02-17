export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVE':
      let newState = [...state];
      let nextMove = newState[newState.length-1];
      let newHistory = newState.concat(nextMove);
      return newHistory;
    default:
      return state;
  }
}

//hist array of object
//add another object to
// key : value array of squares's values