import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppContainer from "./App";
import Todos from "./components/Todos";
import rootReducer from "./modules";

const TodoReduxMain = () => {
  const store = createStore(rootReducer);
  return (
    <div>
      <Provider store={store}>
        {/* <Todos /> */}
        <AppContainer />
      </Provider>
    </div>
  );
};

export default TodoReduxMain;
