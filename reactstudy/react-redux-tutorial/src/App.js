import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
      {/* <Counter number={0} />
      <hr />
      <Todos /> */}
    </div>
  );
}

export default App;
