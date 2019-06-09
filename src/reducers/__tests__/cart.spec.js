import cart from '../cart';
import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../../actions/types';

describe('reducers', () => {
    describe('cart', () => {
        const initialState = {
            idQuantityMap: {},
        };

        it('should provide the initial state', () => {
            expect(cart(undefined, {})).toEqual(initialState);
        });

        it('should handle CHECKOUT action', () => {
            expect(cart({}, { type: CHECKOUT })).toEqual(initialState);
        });

        it('should handle ADD_TO_CART action', () => {
            expect(cart(initialState, { type: ADD_TO_CART, productId: 1 })).toEqual({
                idQuantityMap: { 1: 1 },
            });
        });

        describe('when product is already in cart', () => {
            it('should handle ADD_TO_CART action', () => {
                const state = {
                    idQuantityMap: { 1: 1, 2: 1 },
                };

                expect(cart(state, { type: ADD_TO_CART, productId: 2 })).toEqual({
                    idQuantityMap: { 1: 1, 2: 2 },
                });
            });
        });

        it('should handle REMOVE_FROM_CART action', () => {
            const state = {
                idQuantityMap: { 1: 2 },
            };

            expect(cart(state, { type: REMOVE_FROM_CART, productId: 1 })).toEqual({
                idQuantityMap: { 1: 1 },
            });
        });
    });
});
