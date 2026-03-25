import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";


export default function Child() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchdata = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </>
  );
}

