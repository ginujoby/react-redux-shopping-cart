import products from './products.json';

const TIMEOUT = 100;

export default {
    getProducts: (callback) => setTimeout(() => callback(products), TIMEOUT),
};
