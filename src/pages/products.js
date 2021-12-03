// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
import { addToCart } from '../cart/setupCart.js';

const loading = getElement('.page-loading');
const productsContainer = getElement('.products-container');
window.addEventListener('DOMContentLoaded', function () {
	display(store, productsContainer);
	setupSearch(store);
	setupCompanies(store);
	setupPrice(store);
	addToCart(productsContainer);
	loading.style.display = 'none';
});
