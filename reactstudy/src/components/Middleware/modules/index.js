import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MiddlewareApp from "./App";
import rootReducer from "./Main";
import loggerMiddleware from "../lib/loggerMiddleware";
import { createLogger } from "redux-logger";
const MiddlewareMain = () => {
  //   const store = createStore(rootReducer);
  //   const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
  const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(logger));
  return (
    <Provider store={store}>
      <MiddlewareApp />
    </Provider>
  );
};

export default MiddlewareMain;
