import { useState, useCallback } from "react";
import Product from "./Product";
import Cart from "./Cart";

function Home1() {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((item) => {
        setCart((prevCart) => [...prevCart, item]);
    }, []);

    return (
        <div>
            <h2>Products</h2>

            <Product name="Laptop" addToCart={addToCart} />
            <Product name="Phone" addToCart={addToCart} />

            <Cart cart={cart} />
        </div>
    );
}

export default Home1;