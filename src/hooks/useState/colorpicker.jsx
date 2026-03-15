import React, { useState } from 'react'

export default function Colorpicker() {
    const [color, setColor] = useState("red")

    const Colors = [
        {
            label: "red", value: "#D53E0F"
        },
        {
            label: "green", value: "#A0D585"
        },
        {
            label: "blue", value: "#111FA2"
        },
        {
            label: "pink", value: "#FE9EC7"
        },
        {
            label: "black", value: "#25343F"
        },
        {
            label: "yellow", value: "#FFD150"
        },

    ]

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    console.log(color, "color")

    return (
        <>
            <select value={color} onChange={handleChange}>
                {Colors.map((item, index) => {
                    return <option value={item.value}>{item.label}</option>

                })}
            </select>

            
            <div style={{ height: "100px", width: "100px", padding: "10px 30px", backgroundColor: color }}>

                Color Picker

            </div>

        </>
    )
}
