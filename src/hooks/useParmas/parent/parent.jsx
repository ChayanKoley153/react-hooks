import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Parent() {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {
            let res = await axios.get("https://dummyjson.com/products");
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
            <h2>Product List</h2>
            {data?.products?.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <Link to={`/child/${item.id}`}><button>Button</button></Link>
                </div>
            ))}
        </>
    );
}