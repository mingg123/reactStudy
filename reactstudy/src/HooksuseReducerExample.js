import { useReducer } from "react";

const HooksuseReducerExample = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 };
      case "DECREMENT":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <div>현재 카운터의 값은 {state.value}</div>
      <buttion
        onClick={(e) => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </buttion>
      <buttion
        onClick={(e) => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </buttion>
    </div>
  );
};

export default HooksuseReducerExample;
