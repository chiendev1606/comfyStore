import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const productsContainer = getElement('.products-container');
const form = getElement('.input-form');
const input = getElement('.search-input');
const setupSearch = (store) => {
	form.addEventListener('keyup', function () {
		const searchItem = store.filter((item) => {
			if (item.name.toLowerCase().includes(input.value.toLowerCase())) {
				return item;
			}
		});
		if (searchItem.length < 1) {
			productsContainer.innerHTML = `<h3 class='filter-error'>Sorry,No product matched your search</h3>`;
		} else {
			display(searchItem, productsContainer);
		}
	});
};

export default setupSearch;
