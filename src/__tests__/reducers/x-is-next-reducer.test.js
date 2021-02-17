import xIsNextReducer from '../../reducers/x-is-next-reducer.js';

describe("xIsNextReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(xIsNextReducer(true, { type: null })).toEqual(true);
  });

  test('Should toggle if X is the next play', () => {
    expect(xIsNextReducer(true, { type: 'SWITCH_TURN' })).toEqual(false);
  });
});