import './App.css';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';
import ColorContext, { ColorProvider } from './context/color';

function App() {
  return (
    <ColorProvider>
      <SelectColor />
      <ColorBox />
    </ColorProvider>
  );
}

export default App;
