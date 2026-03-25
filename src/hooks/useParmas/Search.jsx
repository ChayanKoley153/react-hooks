import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Search = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://dummyjson.com/products');
      setOutput(res.data.products);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const handelApi = async () => {
      try {
        if (input) {
          const res = await axios.get(`https://dummyjson.com/products/search?q=${input}`);
          setOutput(res.data.products);
        } 
      } catch (error) {
        console.log(error);
      }
    };

    const delayTimer = setTimeout(() => {
      handelApi();
    }, 3000); 

    return () => clearTimeout(delayTimer); 
  }, [input]);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {output.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </section>
  );
};