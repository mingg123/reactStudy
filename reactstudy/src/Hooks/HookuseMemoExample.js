import React, { useCallback, useMemo, useState } from "react";
import TextField from "@material-ui/core/TextField";

const HookuseMemoExample = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const getAverage = useCallback((number) => {
    console.log("평균 값 계산중 ");
    if (number.length === 0) return 0;
    const sum = number.reduce((a, b) => a + b);
    return sum / number.length;
  }, []);

  const onChange = useCallback(
    (e) => {
      setNumber(e.target.value);
    },
    [number]
  );

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );

  //이렇게 사용하면 등록 버튼 클릭시, list 가 변할시에만 렌더링 된다.  원래는 value를 change할때도 계속 렌더링 됬었음.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <TextField type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default HookuseMemoExample;
