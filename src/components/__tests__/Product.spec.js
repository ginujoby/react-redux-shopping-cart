import React from 'react';
import { shallow } from 'enzyme/build';
import Product from '../Product';

const setup = (props) => {
    const component = shallow(<Product {...props} />);

    return {
        component: component,
    };
};

describe('Product component', () => {
    it('should render title and price', () => {
        const { component } = setup({ title: 'Test Product', price: 19.99 });
        expect(component.text()).toBe('Test Product - €19.99');
    });

    describe('when given inventory', () => {
        it('should render title, price, and inventory', () => {
            const { component } = setup({
                title: 'Test Product',
                price: 19.99,
                quantity: 9,
            });
            expect(component.text()).toBe('Test Product - €19.99 x 9');
        });
    });
});
