import React from "react";
import useList from "./useList";


export const List2 = () => {
    const { data, loading, error } = useList(
        "https://dummyjson.com/users"
    );

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h1>Users List 3</h1>

            {data?.slice(10, 15).map((user) => (
                <div key={user.id}>
                    <h3>
                        {user.firstName} {user.lastName}
                    </h3>

                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};