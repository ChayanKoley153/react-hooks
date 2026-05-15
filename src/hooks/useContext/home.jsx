import React from 'react'
import useTheme from './useTheme'

const Home2 = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{
            background: theme === "light" ? "#fff" : "#000",
            color: theme === "light" ? "#000" : "#fff",
            height: "100vh"
        }}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}

export default Home2;
