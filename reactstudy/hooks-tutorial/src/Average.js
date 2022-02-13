import React, { useCallback, useMemo, useRef, useState } from 'react';

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [list, number]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={inputEl} value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* <b>평균값:</b> {getAverage(list)} */}
        <b>평균값</b> {avg}
      </div>
    </div>
  );
};
export default Average;
