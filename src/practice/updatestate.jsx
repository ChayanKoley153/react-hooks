import React, { useState } from 'react';

const Updatestate = () => {

    const [user, setUser] = useState({ name: "Rahim", age: 20 });


    const handleClick = () => {
        setUser({ ...user, name: "Chayan" })
    };

    return (
        <>
            <input type="text" name="user" value={user.name} />
            <button onClick={handleClick}>Update</button>
        </>
    );
};

export default Updatestate;