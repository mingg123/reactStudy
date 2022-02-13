import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import { useState } from 'react';
import Average from './Average';
import AxiosExample from './AxiosExample';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <AxiosExample />
    // <Average />
    // <Info />
    // <Counter />
    // <div>
    //   <button
    //     onClick={() => {
    //       setVisible(!visible);
    //     }}
    //   >
    //     {visible ? '숨기기' : '보이기'}
    //   </button>
    //   <hr />
    //   {visible && <Info />}
    // </div>
  );
}

export default App;
