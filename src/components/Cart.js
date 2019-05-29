import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ products, total, onRemoveFromCart, onCheckout }) => {
    const hasProducts = products.length > 0;

    return (
        <div>
            <h3>Your Cart</h3>
            {products.map((product) => (
                <CartItem key={product.id} product={product} onRemoveFromCart={() => onRemoveFromCart(product.id)} />
            ))}
            <p>Total: &euro;{total}</p>
            {!hasProducts && <em>Your cart is empty</em>}
            <div>
                <button onClick={onCheckout} disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
    total: PropTypes.string,
    onRemoveFromCart: PropTypes.func,
    onCheckout: PropTypes.func,
};

export default Cart;
