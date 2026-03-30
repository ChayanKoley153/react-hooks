import React from 'react';
import { Link } from 'react-router-dom';

export default function Child({ item }) {
    return (
        <div
            style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                height: "100%",
                margin: "10px"
            }}
        >
            <h3 style={{ fontSize: "14px", margin: 0 }}>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                    {item.id}:
                </span>{" "}
                {item.title}
            </h3>

            <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                User ID: {item.userId}
            </p>

            <p>
                {item.body}
            </p>

            <Link to={`/blog/${item.id}`} style={{ textDecoration: "none" }}>
                <button
                    style={{
                        marginTop: "10px",
                        padding: "6px 12px",
                        border: "none",
                        borderRadius: "5px",
                        background: "green",
                        color: "#fff",
                        cursor: "pointer",
                        width: "fit-content"
                    }}
                >
                    View →
                </button>
            </Link>
        </div>
    );
}