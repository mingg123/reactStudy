import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  const onClick = () => {};
  const onClickIncrease = e => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      Here is About
      <textarea value={num}>{num}</textarea>
      <button onClick={onClickIncrease}>+1</button>
      <Link to={'/info'} state={{ num: num, month: 30 }}>
        <button onClick={onClick}> go to info</button>
      </Link>
    </>
  );
};
