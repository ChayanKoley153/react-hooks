import React, { useCallback, useState } from 'react'
import Child from './child';

const Memo = () => {
    const [count, setCount] = useState(100);
    const [increment, setIncrement] = useState(0);


    const Increment = () => {
        setIncrement(increment + 1);
    }

    const dec = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    
  return (
    <>
          <h1>{increment}</h1> 

          <button onClick={Increment}>Increment</button>
          <Child value={count} value1={dec} />
    </>
  )
}

export default Memo
