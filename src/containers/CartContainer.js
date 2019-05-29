import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getTotal, getCartProducts } from '../reducers';
import { removeFromCart, checkout } from '../actions';

const CartContainer = ({ products, total, removeFromCart, checkout }) => (
    <Cart products={products} total={total} onRemoveFromCart={removeFromCart} onCheckout={checkout} />
);

CartContainer.propTypes = {
    products: PropTypes.array.isRequired,
    total: PropTypes.string,
    removeFromCart: PropTypes.func,
    checkout: PropTypes.func,
};

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state),
});

export default connect(
    mapStateToProps,
    { removeFromCart, checkout },
)(CartContainer);
