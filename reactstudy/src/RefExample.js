import { useState } from "react";
import "./RefExample.scss";

const RefExample = () => {
  const [state, setState] = useState({
    password: "",
    clicked: false,
    validated: false,
  });
  const handleChange = (e) => {
    setState({ password: e.target.value });
  };

  const handleButtionClick = (e) => {
    setState({
      clicked: true,
      validated: state.password === "0000",
    });
  };

  return (
    <div>
      <input
        type="text"
        value={state.password}
        onChange={handleChange}
        className={
          state.clicked ? (state.validated ? "success" : "failure") : ""
        }
      />
      <button onClick={handleButtionClick}> 검증</button>
    </div>
  );
};

export default RefExample;
