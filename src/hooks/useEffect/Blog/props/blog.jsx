import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../../../../api/axios';
import { endPoints } from '../../../../../api/endPoints';

export default function Blog() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const fetchdata = async () => {
        try {
            let res = await axiosInstance.get(`${endPoints.product.details}/${id}`);
            setData(res.data);
            return data
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
    }, [id]);

    if (loading) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
    }

    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "50px auto",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontFamily: "Arial"
            }}
        >
            <h2 style={{ marginBottom: "15px", color: "#333" }}>
                {data.title}
            </h2>

            <p style={{ lineHeight: "1.6", color: "#555", marginBottom: "20px" }}>
                {data.body}
            </p>

            <Link to={`/author/${data.userId}`}>
                <button
                    style={{
                        padding: "10px 16px",
                        border: "none",
                        borderRadius: "6px",
                        backgroundColor: "#28a745",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    More Author Posts
                </button>
            </Link>
        </div>
    );
}