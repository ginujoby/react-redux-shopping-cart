import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actions/types';

const initialState = {
    idQuantityMap: {},
};

const mapIdAndQuantity = (state = initialState.idQuantityMap, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addProductId = action.productId;
            return {
                ...state,
                [addProductId]: (state[addProductId] || 0) + 1,
            };
        case REMOVE_FROM_CART:
            const removeProductId = action.productId;
            const quantity = state[removeProductId];
            if (quantity === 1) {
                delete state[removeProductId];
                return {
                    ...state,
                };
            }

            return {
                ...state,
                [removeProductId]: (state[removeProductId] || 0) - 1,
            };
        default:
            return state;
    }
};

export const getAddedIds = (state) => Object.keys(state.idQuantityMap).map((id) => parseInt(id));

export const getQuantity = (state, productId) => state.idQuantityMap[productId] || 0;

const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT:
            return {
                ...initialState,
            };
        default:
            return {
                idQuantityMap: mapIdAndQuantity(state.idQuantityMap, action),
            };
    }
};

export default cart;
