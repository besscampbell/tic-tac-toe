import stepNumberReducer from '../../reducers/step-number-reducer';

describe("stepNumberReducer", () => {
  test('Should return default stat if no action type is recognize', () => {
    expect(stepNumberReducer(null, { type: null})).toEqual(null);
  });
});