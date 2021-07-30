import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import Counter from "./Counter";
import Todos from "./Todos";
const CounterMain = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      {/* <Counter number={0}></Counter> */}
      <hr />
      {/* <Todos /> */}
    </div>
  );
};

export default CounterMain;
