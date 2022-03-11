import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Info } from './pages/Info';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/info" element={<Info />}></Route>
    </Routes>
  );
}

export default App;
