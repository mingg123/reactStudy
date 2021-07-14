import React, { useCallback, useState } from "react";
import "./RefExample.css";

const RefExample = () => {
  const [state, setState] = useState({
    password: "",
    clicked: false,
    validated: false,
  });
  const handleChange = useCallback(
    (e) => {
      setState({ password: e.target.value });
    },
    [state.password]
  );

  const handleButtionClick = useCallback(
    (e) => {
      setState({
        clicked: true,
        validated: state.password === "0000",
      });
    },
    [state.clicked, state.validated, state.password]
  );

  let textInput = null;
  const handleFocus = () => {
    textInput.focus();
  };

  return (
    <div>
      <input
        ref={(input) => {
          textInput = input;
        }}
        type="text"
        value={state.password}
        onChange={handleChange}
        onClick={handleFocus}
        className={
          state.clicked ? (state.validated ? "success" : "failure") : ""
        }
      />
      <button onClick={handleButtionClick}> 검증</button>
    </div>
  );
};

export default RefExample;
