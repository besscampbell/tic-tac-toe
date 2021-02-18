import historyReducer from './history-reducer';
import xIsNextReducer from './x-is-next-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;