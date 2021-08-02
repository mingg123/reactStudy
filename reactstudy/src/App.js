import logo from "./logo.svg";
import "./App.css";

import AxiosExample from "./AxiosExample";
import NewsList from "./components/News/NewsList";
import NewsMain from "./components/News";
import ColorBox from "./context/ColorBox";
import ColorMain from "./context";
import CounterMain from "./components/ReduxExample";
import ReduxMain from "./components/ReduxExample/modules/ReduxMain";
import MiddlewareMain from "./components/Middleware/modules";

const App = () => {
  // return <OnKeyPressEventExample />;
  // return <RefExample />;
  // return <ItemAddExample />;
  // return <HookuseEffectExample />;
  // return <HooksuseReducerExample />;
  // return <HooksuseReducerExample2 />;
  // return <TodoTempContainer />;
  // return <HookuseMemoExample />;
  // return <AxiosExample />;
  // return <NewsMain />;
  // return <ColorMain />;
  // return <CounterMain />;
  // return <ReduxMain />;
  return <MiddlewareMain />;
};

export default App;
