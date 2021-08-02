import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';
import CounterContainer from './CounterContainer';
import BasicRedux from './CounterContainer';

const AppContainer = () => {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    );
};

export default AppContainer;
