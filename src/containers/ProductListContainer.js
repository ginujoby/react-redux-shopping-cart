import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { addToCart } from '../actions';

const ProductListContainer = ({ products, addToCart }) => <ProductList products={products} onAddToCart={addToCart} />;

ProductListContainer.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    products: state.products.products,
});

export default connect(
    mapStateToProps,
    { addToCart },
)(ProductListContainer);
