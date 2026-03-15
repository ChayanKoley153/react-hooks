import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        } else {
            alert("You are done")
        }

    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("You are now 0")
        }

    }


    return (
        <>
            <div>
                <h2>{count}</h2>
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
