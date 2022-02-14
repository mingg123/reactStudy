import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './color';
import SelectColors from './components/SelectColor';

function App() {
  return (
    <ColorProvider>
      {/* // <ColorContext.Provider value={{ color: 'red' }}> */}
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider>
  );
}

export default App;
