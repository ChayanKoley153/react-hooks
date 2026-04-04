import React, { memo } from 'react'

const Child = ({ value, value1 }) => {
    
    console.log(value);
    
  return (
    <>
          <h1>{value}</h1>
          <button onClick={value1}>decrement</button>
    </>
  )
}

export default memo(Child)
