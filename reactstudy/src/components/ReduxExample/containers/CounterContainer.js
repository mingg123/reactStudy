import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

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
