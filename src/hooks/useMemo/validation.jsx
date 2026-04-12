import React, { useState, useMemo } from "react";

const ExpensiveComponent = ({ data }) => {
    const [inputValue, setInputValue] = useState("");

    // Memoized computation
    const filteredData = useMemo(() => {
        return data.filter((item) => item.includes(inputValue));
    }, [data, inputValue]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Filter data"
            />
            <ul>
                {Array.isArray(filteredData) &&
                    filteredData.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};


const Validation1 = () => {

    const data = ["apple", "banana", "orange", "kiwi", "grape"];

    return (
        <div>
            <h1>Filter Fruits</h1>
            <ExpensiveComponent data={data} />
        </div>
    );
};

export default Validation1;