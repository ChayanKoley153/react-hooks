const Child = ({ handleIncrement }) => {
    return (
        <div>
            <button onClick={handleIncrement}>Increase</button>
        </div>
    );
}

export default Child;