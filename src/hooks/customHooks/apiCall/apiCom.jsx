import React from 'react'
import useFetch from './api'
import { endPoints } from '../../../../api/endPoints';

function Users() {
    const { data, loading, error } = useFetch(
        `${endPoints.user.users}`
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default Users;
