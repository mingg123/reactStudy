import * as React from 'react';

export interface ICounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

export function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: ICounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button
        onClick={() => {
          onIncreaseBy(5);
        }}
      >
        +5
      </button>
    </div>
  );
}
