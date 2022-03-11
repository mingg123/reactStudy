import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import Counter from './components/Counter';
import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  const router = useNavigate();
  const onClickCounter = () => {
    router('/counter');
  };

  const onClickToggle = () => {
    router('/todo');
  };
  const onClickBack = () => {
    router(-1);
  };
  return (
    <>
      <button onClick={onClickBack}>back</button>
      <button onClick={onClickCounter}>counter</button>
      <button onClick={onClickToggle}>todo</button>
      <Routes>
        <Route path="/counter" element={<CounterContainer />}></Route>
        <Route path="/todo" element={<TodosContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
