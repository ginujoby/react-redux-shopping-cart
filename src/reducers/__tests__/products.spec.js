import reducer, * as products from '../products';
import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../../actions/types';

describe('reducers', () => {
    describe('products', () => {
        let state;

        describe('when products fetched', () => {
            beforeEach(() => {
                state = reducer(
                    {},
                    {
                        type: FETCH_PRODUCTS,
                        products: [
                            {
                                id: 1,
                                title: 'Product 1',
                                inventory: 2,
                            },
                            {
                                id: 2,
                                title: 'Product 2',
                                inventory: 1,
                            },
                        ],
                    },
                );
            });

            it('contains the products from the action', () => {
                expect(products.getProduct(state, 1)).toEqual({
                    id: 1,
                    title: 'Product 1',
                    inventory: 2,
                });
                expect(products.getProduct(state, 2)).toEqual({
                    id: 2,
                    title: 'Product 2',
                    inventory: 1,
                });
            });

            it('contains no other products', () => {
                expect(products.getProduct(state, 3)).toEqual(undefined);
            });

            describe('when an item is added to the cart', () => {
                beforeEach(() => {
                    state = reducer(state, { type: ADD_TO_CART, productId: 1 });
                });

                it('the inventory is reduced', () => {
                    expect(products.getProduct(state, 1)).toEqual({
                        id: 1,
                        title: 'Product 1',
                        inventory: 1,
                    });
                });
            });

            describe('when an item is removed form the cart', () => {
                beforeEach(() => {
                    state = reducer(state, { type: REMOVE_FROM_CART, productId: 2 });
                });

                it('the inventory is reduced', () => {
                    expect(products.getProduct(state, 2)).toEqual({
                        id: 2,
                        title: 'Product 2',
                        inventory: 2,
                    });
                });
            });
        });
    });
});
