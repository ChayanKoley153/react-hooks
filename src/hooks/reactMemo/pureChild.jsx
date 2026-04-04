import React, { memo } from 'react'


const PureChild = ({ name, age }) => {
    console.log("Chayan");

    return (
        <>
            <div>Child Name: {name} {age}</div>
        </>
    )
}

export default (PureChild)