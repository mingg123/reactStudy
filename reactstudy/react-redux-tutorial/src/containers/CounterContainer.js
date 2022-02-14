import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({}) => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={useCallback(() => dispatch(increase()), [dispatch])}
      onDecrease={useCallback(() => dispatch(decrease()), [dispatch])}
    />
  );
};

export default CounterContainer;

// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//     console.log('increase');
//   },
//   decrease: () => {
//     dispatch(decrease());
//     // console.log('decrease');
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
