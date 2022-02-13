import React, { useEffect, useReducer, useState } from 'react';
import useInputs from './useInputs';

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }
const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  // const [state, dispatch] = useReducer(reducer, {
  //   name: '',
  //   nickname: '',
  // });
  // const [name, setName] = useState('');
  // const [nickname, setNickName] = useState('');

  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다!');
  //   console.log({ name, nickname });
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // }, [name]);
  // const onChange = e => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = e => {
  //   setNickName(e.target.value);
  // };

  // const onChange = e => {
  //   dispatch(e.target);
  //   console.log(e);
  // };
  return (
    <div>
      <div>
        <input name="name" value={state.name} onChange={onChange} />
        <input name="nickname" value={state.nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름 : </b> {state.name}
      </div>
      <div>
        <b>닉네임 : </b> {state.nickname}
      </div>
    </div>
  );
};

export default Info;
