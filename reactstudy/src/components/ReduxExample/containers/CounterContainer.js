import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../Counter";
import useActions from "../lib/useActions";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  //   const [Increase, Decrease] = useActions([onIncrease, onDecrease], []);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log("increase");
    dispatch(increase());
  },
  decrease: () => {
    console.log("decrease");
    dispatch(decrease());
  },
});
//컴포넌트와 리덕스 연동하기위해 사용(connect)
export default connect((state) => ({ number: state.counter.number }), {
  increase,
  decrease,
})(CounterContainer);
