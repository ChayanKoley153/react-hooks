import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../../../api/axios';
import { endPoints } from '../../../../../api/endPoints';

export default function Author() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { authorId } = useParams();

    const fetchdata = async () => {
        try {
            let res = await axiosInstance.get(`${endPoints.product.authors}?userId=${authorId}`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    
    useEffect(() => {
        const controller = new AbortController();
        fetchdata();

        return () => {
            controller.abort();
        }
    }, [authorId]);


    if (loading) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
    }

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto", fontFamily: "Arial" }}>

            <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
                Author Posts
            </h1>

            {data.map((item) => (
                <div
                    key={item.id}
                    style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        marginBottom: "20px",
                        transition: "0.2s"
                    }}
                >

                    <h3 style={{ marginBottom: "10px", color: "#222" }}>
                        {item.id}:  {item.title}
                    </h3>

                    <p style={{ color: "#555", lineHeight: "1.6" }}>
                        {item.body}
                    </p>
                </div>
            ))}
        </div>
    );
}