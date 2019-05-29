import api from '../api/products';
import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from './types';

export const fetchProducts = () => (dispatch) => {
    api.getProducts((products) =>
        dispatch({
            type: FETCH_PRODUCTS,
            products,
        }),
    );
};

export const addToCart = (productId) => (dispatch, getState) => {
    const product = getState().products.products.find((p) => p.id === productId);

    if (product.inventory > 0) {
        dispatch({
            type: ADD_TO_CART,
            productId,
        });
    }
};

export const removeFromCart = (productId) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        productId,
    });
};

export const checkout = () => (dispatch) => {
    dispatch({
        type: CHECKOUT,
    });
};
