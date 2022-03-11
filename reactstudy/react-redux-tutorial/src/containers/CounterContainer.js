import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} increase={increase} decrease={decrease} />;
};

const mapstateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
    console.log('increase');
  },
  decrease: () => {
    dispatch(decrease());
    console.log('decrease');
  },
});

export default connect(mapstateToProps, mapDispatchToProps)(CounterContainer);
