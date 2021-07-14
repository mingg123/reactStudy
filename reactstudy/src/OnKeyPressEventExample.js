import { useState } from "react";
const OnKeyPressEventExample = () => {
  const [state, setState] = useState("");

  const handleClick = (e) => {
    setState(e.target.value);
    alert(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleClick(e);
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="리액트 공부 재밋네요^^"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default OnKeyPressEventExample;
