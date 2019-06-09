import { getTotal, getCartProducts } from '../index';

describe('selectors', () => {
    describe('getTotal', () => {
        it('should return price total', () => {
            const state = {
                cart: {
                    idQuantityMap: {
                        1: 2,
                        2: 3,
                        3: 1,
                    },
                },
                products: {
                    products: [
                        {
                            id: 1,
                            price: 9.99,
                        },
                        {
                            id: 2,
                            price: 14.99,
                        },
                        {
                            id: 3,
                            price: 19.99,
                        },
                    ],
                },
            };
            expect(getTotal(state)).toBe('84.94');
        });
    });

    describe('getCartProducts', () => {
        it('should return products with quantity', () => {
            const state = {
                cart: {
                    idQuantityMap: {
                        1: 4,
                        2: 2,
                        3: 1,
                    },
                },
                products: {
                    products: [
                        {
                            id: 1,
                            price: 9.99,
                        },
                        {
                            id: 2,
                            price: 14.99,
                        },
                        {
                            id: 3,
                            price: 19.99,
                        },
                    ],
                },
            };

            expect(getCartProducts(state)).toEqual([
                {
                    id: 1,
                    price: 9.99,
                    quantity: 4,
                },
                {
                    id: 2,
                    price: 14.99,
                    quantity: 2,
                },
                {
                    id: 3,
                    price: 19.99,
                    quantity: 1,
                },
            ]);
        });
    });
});
