import historyReducer from '../../reducers/history-reducer';

describe('historyReducer', () => {

    let action;
    const currentState = [{squares: [null, null, null, null, null, null, null, null, null]}]
    const newState = [{squares: [null, null, 'X', null, null, null, null, null, null]}]
    const historySteps = [{squares: [null, null, null, null, null, null, null, null, null]}, {squares: [null, null, 'X', null, null, null, null, null, null]}, {squares: [null, null, 'X', null, null, 'O', null, null, null]}, {squares: [null, null, 'X', null, null, 'O', null, null, 'X']}];

    const squareData = {
      index: 3,
      value: 'X'
    }


    test('Should return default state if no action type passed into the reducer', () => {
      expect(historyReducer({}, {type: null})).toEqual({})
    });

    test('Should add a "move" object into history array', () => {
      expect(historyReducer(newState, {type: 'ADD_MOVE'})).toEqual([{squares:[null, null, 'X', null, null, null, null, null, null]}, {squares: [null, null, 'X', null, null, null, null, null, null]}])
    });

    test('Should add a value to a new "move" object into history array', () => {

      const { index, value } = squareData;
      action = {
        type: 'ADD_MOVE',
        index,
        value,
      }
      expect(historyReducer(currentState, action)).toEqual([{squares:[null, null, null, null, null, null, null, null, null]}, {squares: [null, null, null, 'X', null, null, null, null, null]}])
    });

    test('Should return history up to given past step', () => {
      action = {
        type: 'OLD_STEP',
        stepNumber: 2,
      }
      expect(historyReducer(historySteps, action)).toEqual([{squares:[null, null, null, null, null, null, null, null, null]}, {squares: [null, null, 'X', null, null, null, null, null, null]}, {squares: [null, null, 'X', null, null, 'O', null, null, null]}]);
    });
});