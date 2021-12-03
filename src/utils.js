//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products';
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';

const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element) return element;
	throw new Error(`Please check "${selection}" selector, no such element exist`);
};

const formatPrice = (price) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price / 100);
};

const getStorageItem = (name) => {
	let content = localStorage.getItem(name);
	if (!content) {
		return [];
	}
	return JSON.parse(content);
};
const setStorageItem = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};

export { allProductsUrl, singleProductUrl, getElement, formatPrice, getStorageItem, setStorageItem };
