import React from 'react';
import { shallow } from 'enzyme/build';
import ProductList from '../ProductList';
import ProductListItem from '../ProductListItem';

const setup = (products = []) => {
    const actions = {
        onAddToCart: jest.fn(),
    };

    const component = shallow(<ProductList products={products} {...actions} />);

    return {
        component: component,
        items: component.find(ProductListItem),
    };
};

describe('ProductsList component', () => {
    describe('when given product', () => {
        const products = [
            {
                id: 1,
                title: 'Product 1',
                price: 19.99,
                inventory: 1,
            },
        ];

        it('should render products', () => {
            const { items } = setup(products);
            expect(items.at(0).props().product).toEqual(products[0]);
        });
    });
});
