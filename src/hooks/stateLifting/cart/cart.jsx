function Cart({ cart }) {
    return (
        <div>
            <h2>Cart Items</h2>
            {cart.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default Cart;