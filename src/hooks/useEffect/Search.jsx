import axios from "axios";
import React, { useEffect, useState } from "react";
import Child from "./child";

const Search = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setOutput(res.data.products);
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (input) {
      const handleApi = async () => {
        try {
          let res = await axios.get(
            `https://dummyjson.com/products/search?q=${input}`
          );
          setOutput(res.data.products);
        } catch (error) {
          console.log(error);
        }
      };

      // debouncer
      const delay = setTimeout(() => {
        handleApi();
      }, 500);

      // cleaner function 
      return () => clearTimeout(delay);
    }
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
        <input type="submit" value="submit" />
      </form>

      <br />

      {output.map((item) => (
        <Child key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Search;