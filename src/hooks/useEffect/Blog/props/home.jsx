import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Child from './child';
import axiosInstance from '../../../../../api/axios';
import { endPoints } from '../../../../../api/endPoints';

export default function Home() {
    const [output, setOutput] = useState([]);
    const [sort, setSort] = useState("title");

    const fetchdata = async () => {
        try {
            let res = await axiosInstance.get(`${endPoints.product.list}?_sort=${sort}&_order=asc`);
            setOutput(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchdata();

        return () => {
            controller.abort();
        }
    }, [sort]);


    
    return (
        <div style={{
            maxWidth: "1100px",
            margin: "auto",
            padding: "20px",
            fontFamily: "Segoe UI, sans-serif",
            backgroundColor: "#f5f7fa",
            minHeight: "100vh"
        }}>

            <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
                Blog Posts
            </h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px"
            }}>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        fontSize: "14px"
                    }}
                >
                    <option value="title">Sort by Title </option>
                    <option value="id">Sort by ID </option>
                    <option value="userId">Sort by User ID</option>
                </select>
            </div>

            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {output.map((item) => (
                    <Child key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}



