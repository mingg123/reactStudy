import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MiddlewareApp from "./App";
import rootReducer from "./Main";
import loggerMiddleware from "../lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const MiddlewareMain = () => {
  //   const store = createStore(rootReducer);
  //   const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

  //   const store = createStore(rootReducer, applyMiddleware(logger));
  const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
  return (
    <Provider store={store}>
      <MiddlewareApp />
    </Provider>
  );
};

export default MiddlewareMain;
