import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase } from '../../ReduxExample/modules/counter';
import Counter from './Counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
        </div>
    );
};

const mapStateToProps = (state) => ({ number: state.counter.number });

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        console.log('increase');
        dispatch(increase());
    },
    decrease: () => {
        console.log('decrease');
        dispatch(decrease());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
