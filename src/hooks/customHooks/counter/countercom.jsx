import UseCounter from './counter'

export default function CounterCusTom() {
    const { count, increment, decrement, reset } = UseCounter(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}
