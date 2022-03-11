import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import todos from './todo';

const rootReducer = combineReducers({
  counter,
  todos,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}
export default rootReducer;
