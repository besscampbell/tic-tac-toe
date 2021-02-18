import historyReducer from './history-reducer';
import xIsNextReducer from './x-is-next-reducer';
import { combineReducers } from 'redux';
import stepNumberReducer from './step-number-reducer';

const rootReducer = combineReducers({
  history: historyReducer,
  xIsNext: xIsNextReducer,
  stepNumber: stepNumberReducer,
});

export default rootReducer;