import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../module';
import { decrease, increase, increaseBy } from '../module/counter';

export interface ICounterContainerProps {}

export default function CounterContainer(props: ICounterContainerProps) {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrase = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrase}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}
