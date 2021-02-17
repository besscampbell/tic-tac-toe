import historyReducer from '../../reducers/history-reducer';

describe('historyReducer', () => {

    const currentState = [{squares: Array(9)}]


    test('Should return default state if no action type passed into the reducer', () => {
      expect(historyReducer({}, {type: null})).toEqual({})
    });

    test('Should add a "move" object into history array', () => {
      expect(historyReducer(currentState, {type: 'ADD_MOVE'})).toEqual([{squares: Array(9)}, {squares: Array(9)}])
    });
});

