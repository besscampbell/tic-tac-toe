import rootReducer from '../../reducers/index';
import historyReducer from '../../reducers/history-reducer';
import xIsNextReducer from '../../reducers/x-is-next-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);
let action;

describe ("rootReducer", () => {

  test('Check that initial state of historyReducer matches root reducer', () => {
    expect(store.getState().history).toEqual(historyReducer([], {type: null}));
  });

  test('Check that initial state of xIsNextReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, {type: null}));
  });

  test('Check that OLD_STEP action works for root Reducer', () => {
  action = {
    type: 'OLD_STEP',
    stepNumber: 2,
  }
  store.dispatch(action);
  expect(store.getState().history).toEqual(historyReducer([], action));
  });

  test('Check that SWITCH_TURN action works for root reducer', () => {
  action = {
    type: 'SWITCH_TURN'
  }
  store.dispatch(action);
  expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, action))
  });
});