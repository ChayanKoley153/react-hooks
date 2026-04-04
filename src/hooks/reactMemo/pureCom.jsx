import React, { useState } from 'react'
import PureChild from './pureChild';


const ParentPure = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <PureChild name="Alice" age="13" />
            <button onClick={() => { setCount(count + 1) }}>Increment Count</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default ParentPure;