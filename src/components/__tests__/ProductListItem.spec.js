import React from 'react';
import { shallow } from 'enzyme/build';
import Product from '../Product';
import ProductListItem from '../ProductListItem';

const setup = (product) => {
    const actions = {
        onAddToCart: jest.fn(),
    };

    const component = shallow(<ProductListItem product={product} {...actions} />);

    return {
        component: component,
        actions: actions,
        product: component.find(Product),
        button: component.find('button'),
    };
};

let productProps;

describe('ProductItem component', () => {
    beforeEach(() => {
        productProps = {
            title: 'Product 1',
            price: 19.99,
            inventory: 9,
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

    it('should render Add To Cart message', () => {
        const { button } = setup(productProps);
        expect(button.text()).toMatch(/^Add to cart/);
    });

    it('should not disable button', () => {
        const { button } = setup(productProps);
        expect(button.prop('disabled')).toEqual('');
    });

    it('should call action on button click', () => {
        const { button, actions } = setup(productProps);
        button.simulate('click');
        expect(actions.onAddToCart).toBeCalled();
    });

    describe('when product inventory is 0', () => {
        beforeEach(() => {
            productProps.inventory = 0;
        });

        it('should render Out of stock message', () => {
            const { button } = setup(productProps);
            expect(button.text()).toMatch(/^Out of stock/);
        });

        it('should disable button', () => {
            const { button } = setup(productProps);
            expect(button.prop('disabled')).toEqual('disabled');
        });
    });
});
