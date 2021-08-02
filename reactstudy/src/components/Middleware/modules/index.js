import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MiddlewareApp from "./App";
import rootReducer, { rootSaga } from "./Main";
import loggerMiddleware from "../lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const MiddlewareMain = () => {
  //   const store = createStore(rootReducer);
  //   const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

  //   const store = createStore(rootReducer, applyMiddleware(logger));
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    // applyMiddleware(logger, ReduxThunk, sagaMiddleware)
    composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <MiddlewareApp />
    </Provider>
  );
};

export default MiddlewareMain;
