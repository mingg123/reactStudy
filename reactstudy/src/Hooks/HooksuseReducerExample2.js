import { useCallback, useReducer } from "react";

const HooksuseReducerExample2 = () => {
  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  const onChange = useCallback((e) => {
    dispatch(e.target);
  }, []);

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickName" value={nickName} onChange={onChange} />
      <div> {name}</div>
      <div>{nickName}</div>
    </div>
  );
};

export default HooksuseReducerExample2;
