import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";

const rootReducer = combineReducers({
  counter,
  //   sample,
  //   loading,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
