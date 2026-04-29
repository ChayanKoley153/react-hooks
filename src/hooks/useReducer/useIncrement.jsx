import React, { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === "inc") {
        if (state.value < 10) {
            return { value: state.value + 1 };
        } else {
            alert("Can't increment more than 10");
            return state;
        }
    } else if (action.type === "dec") {
        if (state.value > 0) {
            return { value: state.value - 1 };
        } else {
            alert("Can't decrement less than 0");
            return state;
        }
    } else if (action.type === "res") {
        return { value: 0 };
    } else {
        return state;
    }
};



const IncrementReducer = () => {
    const initialState = { value: 0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state, "state");


    return (
        <>
            <h2>Value: {state.value}</h2>

            <button onClick={() => dispatch({ type: "inc" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "dec" })}>
                Decrement
            </button>

            <button onClick={() => dispatch({ type: "res" })}>
                Reset
            </button>
        </>
    );
};

export default IncrementReducer;