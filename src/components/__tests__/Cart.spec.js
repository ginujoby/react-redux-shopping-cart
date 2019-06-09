import React from 'react';
import { shallow } from 'enzyme/build';
import Cart from '../Cart';
import CartItem from '../CartItem';

const setup = (total, products = []) => {
    const actions = {
        onRemoveFromCart: jest.fn(),
        onCheckout: jest.fn(),
    };

    const component = shallow(<Cart products={products} total={total} {...actions} />);

    return {
        component: component,
        actions: actions,
        button: component.find('button'),
        items: component.find(CartItem),
        em: component.find('em'),
        p: component.find('p'),
    };
};

describe('Cart component', () => {
    it('should display total', () => {
        const { p } = setup('109');
        expect(p.text()).toMatch(/^Total: \€109/);
    });

    it('should display cart is empty message', () => {
        const { em } = setup();
        expect(em.text()).toMatch(/^Your cart is empty/);
    });

    it('should disable button', () => {
        const { button } = setup();
        expect(button.prop('disabled')).toEqual('disabled');
    });

    describe('when given product', () => {
        const products = [
            {
                id: 1,
                title: 'Product 1',
                price: 19.99,
                quantity: 1,
            },
        ];

        it('should render products', () => {
            const { items } = setup('19.99', products);
            expect(items.at(0).props().product).toEqual(products[0]);
        });

        it('should not disable button', () => {
            const { button } = setup('19.99', products);
            expect(button.prop('disabled')).toEqual('');
        });

        it('should call action on button click', () => {
            const { button, actions } = setup('19.99', products);
            button.simulate('click');
            expect(actions.onCheckout).toBeCalled();
        });
    });
});
