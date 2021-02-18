export default (state = true, action) => {
  const { stepNumber } = action;
  switch (action.type) {
    case 'SWITCH_TURN':
      return !state;
    case 'VERIFY_TURN':
      if ((stepNumber % 2) === 0){
        return true;
      } else {
        return false;
      }
    default:
        return state;
  }
}