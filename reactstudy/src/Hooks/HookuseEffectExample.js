import React, { useState, useEffect, useCallback } from "react";

const HookuseEffectExample = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  //가장 처음 렌더링될때 effect를 부르고
  //   다음 렌더링될때 cleanup 부르고 ->  effect부른다
  useEffect(() => {
    console.log("effect!");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);
  const handleChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const handleChangeNickName = useCallback(
    (e) => {
      setNickName(e.target.value);
    },
    [nickName]
  );

  return (
    <div>
      <input value={name} onChange={handleChangeName} />

      <input value={nickName} onChange={handleChangeNickName} />
      <div> {name}</div>
      <div>{nickName}</div>
    </div>
  );
};

export default HookuseEffectExample;
