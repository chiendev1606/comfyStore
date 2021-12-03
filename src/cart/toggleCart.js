import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const cartClose = getElement('.cart-close');
const toggleCart = getElement('.toggle-cart');

toggleCart.addEventListener('click', function () {
	cartOverlay.classList.add('show');
});
cartClose.addEventListener('click', function () {
	cartOverlay.classList.remove('show');
});
document.body.addEventListener('click', function (e) {
	const elementCL = e.target.classList;
	if (elementCL.contains('cart-overlay')) {
		cartOverlay.classList.remove('show');
	}
});
export const openCart = () => {
	cartOverlay.classList.add('show');
};
