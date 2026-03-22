import React, { useState } from 'react';

const Dropdown = () => {

    const countrylist = [
        { id: 1, country: "India", capital: "New Delhi" },
        { id: 2, country: "Azerbaijan", capital: "Baku" },
        { id: 3, country: "Australia", capital: "Canberra" },
        { id: 4, country: "Egypt", capital: "Cairo" },
    ];


    const [selectCapital, setSelectCapital] = useState('');

    
    const handleChange = (e) => {
        const id = Number(e.target.value);

        const selected = countrylist.map((country) => country.id === id ? country.capital : '');
        // console.log(selected);
        
        setSelectCapital(selected);
    };




    return (
        <>
            <select onChange={handleChange} >
                <option value=""> --select country--</option>
                {countrylist.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.country}
                    </option>
                ))}
            </select>

            <br />

            <div>
                <select>
                    {selectCapital ? (
                        <option value="">{selectCapital}</option>
                    ) : (
                        <option value="">--select capital--</option>
                    )}
                </select>
            </div>

        </>
    );
};

export default Dropdown;