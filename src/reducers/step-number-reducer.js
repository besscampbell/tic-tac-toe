export default (state = 0, action) => {
  const { step } = action;
  switch(action.type){
    case 'SET_STEP':
      return step;
    default:
      return state;
  }
}