import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense, useState } from 'react';
import loadable from '@loadable/component';
//클래스형 App 컴포넌트를 이용한 코드 스플리팅
// class App extends Component {
//   state = {
//     SplitMe: null,
//   };

//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default,
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <p onClick={this.handleClick}>Hello React! </p>
//         {SplitMe && <SplitMe />}
//       </div>
//     );
//   }
// }

//함수형 컴포넌트를 이용한 코드스플리팅
// const SplitMe = React.lazy(() => import('./SplitMe'));
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const onClick = () => {
//     setVisible(true);
//   };
//   return (
//     <div className="App">
//       <p onClick={onClick}>Hello React! </p>
//       <Suspense fallback={<div>loading...</div>}>
//         {visible && <SplitMe />}
//       </Suspense>
//     </div>
//   );
// };

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});
const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <p onClick={onClick} onMouseOver={onMouseOver}>
        Hello React!
      </p>
      {visible && <SplitMe />}
    </div>
  );
};
export default App;
