import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, onAddToCart }) => (
    <div>
        <h3>Products</h3>
        {products.map((product) => (
            <ProductListItem key={product.id} product={product} onAddToCart={() => onAddToCart(product.id)} />
        ))}
    </div>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
