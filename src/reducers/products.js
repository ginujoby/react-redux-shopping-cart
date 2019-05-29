import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
    products: [],
};

export const getProduct = (state, id) => state.products.find((p) => p.id === id);

const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        case ADD_TO_CART:
            const addProduct = getProduct(state, action.productId);
            addProduct.inventory -= 1;
            return {
                ...state,
                products: [...state.products],
            };
        case REMOVE_FROM_CART:
            const removeProduct = getProduct(state, action.productId);
            removeProduct.inventory += 1;
            return {
                ...state,
                products: [...state.products],
            };
        default:
            return state;
    }
};

export default products;
