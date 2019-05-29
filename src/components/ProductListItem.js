import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductListItem = ({ product, onAddToCart }) => (
    <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} quantity={product.inventory} />
        <button onClick={onAddToCart} disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Out of stock'}
        </button>
    </div>
);

ProductListItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductListItem;
