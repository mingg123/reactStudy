import React from "react";
import { createStore } from "redux";
import rootReducer from ".";
import CounterMain from "..";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const ReduxMain = () => {
  //   const store = createStore(rootReducer);
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <CounterMain />
    </Provider>
  );
};

export default ReduxMain;
