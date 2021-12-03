// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart, handleCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';
import fetchProducts from '../fetchProducts.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
	const idStr = window.location.search;
	if (idStr) {
		const {
			id,
			fields: {
				company,
				description,
				colors,
				name,
				price,
				image: [{ thumbnails }],
			},
		} = await fetchProducts(singleProductUrl + idStr);
		document.title = `${name.toUpperCase()} | Comfy `;
		pageTitleDOM.textContent = `Home / ${name}`;
		imgDOM.src = thumbnails.large.url;
		descDOM.textContent = description;
		titleDOM.textContent = name;
		companyDOM.textContent = `by ${company}`;
		priceDOM.textContent = formatPrice(price);
		colorsDOM.innerHTML = colors.reduce((content, color) => {
			content += `<span style="background-color:${color}" class='product-color'></span>`;
			return content;
		}, '');
		productID = id;
		loading.style.display = 'none';
	}
});
cartBtn.addEventListener('click', function () {
	handleCart(productID);
});
