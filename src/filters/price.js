import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const priceFilter = getElement('.price-filter');
const priceValue = getElement('.price-value');
const setupPrice = (store) => {
	const numberPrice = store.map((item) => {
		return item.price;
	});
	const maxValue = Math.ceil(Math.max(...numberPrice) / 100);
	priceFilter.min = 0;
	priceFilter.max = maxValue;
	priceFilter.value = maxValue;
	priceValue.innerHTML = `Value: $${maxValue}`;
	priceFilter.addEventListener('input', function () {
		const filterItems = store.filter((item) => item.price / 100 <= priceFilter.value);
		priceValue.innerHTML = `Value: $${priceFilter.value}`;
		if (filterItems.length < 1) {
			getElement(
				'.products-container'
			).innerHTML = `<h3 class='filter-error'>Sorry,No product matched your search</h3>`;
		} else {
			display(filterItems, getElement('.products-container'));
		}
	});
};

export default setupPrice;
