import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usePrevious from '../hooks/usePrevious';
import usePrint from '../hooks/usePrint';

export const About = () => {
  const router = useNavigate();
  const [alphabet, setAlph] = useState('A');
  const preAl = usePrevious(alphabet);

  useEffect(() => {
    if (alphabet === 'C' && preAl === 'A') {
      console.log('zzz');
    }
    print();
    print2();
  }, [alphabet]);

  const { print, print2 } = usePrint();

  const onClick = () => {
    router('/info', { state: { num: num, month: 30 } });
  };
  const onClickIncrease = e => {
    setNum(num + 1);
    if (num == 2) setAlph('C');
    setTimeout(() => {
      setTimeout(() => {
        console.log('first!');
      }, 5000);
      console.log('second');
    }, 3000);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      Here is About
      <textarea value={num}>{num}</textarea>
      <button onClick={onClickIncrease}>+1</button>
      {/* <Link to={'/info'} state={{ num: num, month: 30 }}> */}
      <button onClick={onClick}> go to info</button>
      {/* </Link> */}
    </>
  );
};
