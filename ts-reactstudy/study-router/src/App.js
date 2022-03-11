import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Info } from './pages/Info';
import { UserStoreProvider } from './store/userStore';

function App() {
  return (
    <UserStoreProvider>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </UserStoreProvider>
  );
}

export default App;
