import React, { useState } from 'react';

const Dropdown = () => {

    const countrylist = [
        { id: 1, country: "India", capital: "New Delhi" },
        { id: 2, country: "Azerbaijan", capital: "Baku" },
        { id: 3, country: "Australia", capital: "Canberra" },
        { id: 4, country: "Egypt", capital: "Cairo" },
    ];


    const [country, setCountry] = useState('')
    const [capital, setCapital] = useState('');

    
    const handleChange = (e) => {
        const id = Number(e.target.value);
        setCountry(id);

        const selected = countrylist.find((country) => country.id === id );
        console.log(selected);
        
        setCapital( selected ? selected.capital : '');
    };



    console.log(capital, 'select capital');
    

    return (
        <>
            <select value={country}  onChange={handleChange} >
                <option value="">--select country--</option>
                {countrylist.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.country}
                    </option>
                ))}
            </select>


            <select value={capital} >
                <option value="">--select capital--</option>
                {countrylist.map((item) => (
                    <option key={item.id} value={item.capital}>
                        {item.capital}
                    </option>
                ))}
            </select>

        </>
    );
};

export default Dropdown;