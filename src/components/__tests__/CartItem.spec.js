import React from 'react';
import { shallow } from 'enzyme/build';
import CartItem from '../CartItem';
import Product from '../Product';

const setup = (product) => {
    const actions = {
        onRemoveFromCart: jest.fn(),
    };

    const component = shallow(<CartItem product={product} {...actions} />);

    return {
        component: component,
        actions: actions,
        product: component.find(Product),
        button: component.find('button'),
    };
};

let productProps;

describe('CartItem component', () => {
    beforeEach(() => {
        productProps = {
            title: 'Product 1',
            price: 19.99,
            quantity: 9,
        };
    });

    it('should render product', () => {
        const { product } = setup(productProps);
        expect(product.props()).toEqual({
            title: 'Product 1',
            price: 19.99,
            quantity: 9,
        });
    });

    it('should call action on button click', () => {
        const { button, actions } = setup(productProps);
        button.simulate('click');
        expect(actions.onRemoveFromCart).toBeCalled();
    });
});
