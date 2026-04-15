import React from "react";

function Product({ name, addToCart }) {
    console.log("Rendering:", name);

    return (
        <div>
            <p>{name}</p>
            <button onClick={() => addToCart(name)}>
                Add to Cart
            </button>
        </div>
    );
}

export default React.memo(Product);