import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [output, setOutput] = useState([]);

    const fetchdata = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setOutput(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div style={{
            maxWidth: "1100px",
            margin: "auto",
            padding: "20px",
            fontFamily: "Segoe UI, sans-serif",
            backgroundColor: "#f5f7fa",
            minHeight: "100vh"
        }}>

            {/* Title */}
            <h1 style={{
                textAlign: "center",
                marginBottom: "25px",
                color: "#222",
                fontWeight: "600"
            }}>
                📝 Blog Posts
            </h1>

            {/* Buttons */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "25px"
            }}>
                <button style={btnStyle}>Ascending Order</button>
                <button style={btnStyle}>Descending Order</button>
            </div>

            {/* Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px"
            }}>
                {output?.map((item) => (
                    <div
                        key={item.id}
                        style={cardStyle}
                    >
                        <h3 style={{
                            fontSize: "15px",
                            marginBottom: "15px",
                            color: "#333",
                            lineHeight: "1.4" 
                        }}>
                            <span style={{ color: "#007bff", fontWeight: "600" }}>
                                {item.id}: {" "}
                            </span>
                            {item.title}
                        </h3>

                        <Link to={`/blog/${item.id}`} style={{ textDecoration: "none" }}>
                            <button style={viewBtn}>
                                View Details →
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}




/* Styles */

const btnStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s"
};

const cardStyle = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    transition: "0.3s",
    cursor: "pointer"
};

const viewBtn = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: "14px"
};