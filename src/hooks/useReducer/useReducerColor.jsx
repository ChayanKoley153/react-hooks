import React, { useReducer } from 'react'

const color = (state, action) => {
    if (action.type === "color") {
        return { color: action.color }
    } else {
        return state;
    }
}

const ColorReducer = () => {
    const initialState = { color: "#0000ff" };

    const [state, dispatch] = useReducer(color, initialState);

    console.log(state, "state");
    

    const onChange = (event) => {
        const maincolor = event.target.value;
        dispatch({ type: "color", color: maincolor });
    }

    const colors = [
        { label: "Red", value: "#ff0000" },
        { label: "Green", value: "#00ff00" },
        { label: "Blue", value: "#0000ff" },
        { label: "Yellow", value: "#ffff00" },
    ]

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    margin: "20px auto",
                    backgroundColor: state.color,
                    border: "2px solid #000"
                }}
            ></div>

            <select onChange={onChange} value={state.color}>
                {colors.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default ColorReducer;