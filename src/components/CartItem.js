import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const CartItem = ({ product, onRemoveFromCart }) => (
    <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} quantity={product.quantity} />
        <button onClick={onRemoveFromCart}>Remove</button>
    </div>
);

CartItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
