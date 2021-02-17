export default (state = true, action) => {
  switch (action.type) {
    case 'SWITCH_TURN':
      return !state;
    default:
        return state;
  }
}