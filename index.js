// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { formatPrice, getElement, setStorageItem } from './src/utils.js';
import { addToCart } from './src/cart/setupCart.js';

const sectionCenter = getElement('.section-center');

window.addEventListener('DOMContentLoaded', async function () {
	const data = await fetchProducts();
	setStorageItem('store', data);
	setupStore();
	const featuredProduct = store.filter((item) => item.featured);
	display(featuredProduct, sectionCenter);
	addToCart(sectionCenter);
});
