// import
import { getStorageItem, setStorageItem, formatPrice, getElement } from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct, store } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items
let cart = [];
cart = getStorageItem('cart');

const increaseAmount = (cart) => {
	getElement('.cart-items').addEventListener('click', function (e) {
		const element = e.target.parentElement;
		if (element.classList.contains('cart-item-increase-btn')) {
			const elementId = e.target.parentElement.dataset.id;
			cart = cart.map((item) => {
				if (item.id === elementId) {
					item.amount += 1;
				}
				return item;
			});
			const total = Number(element.nextElementSibling.textContent) + 1;
			element.nextElementSibling.textContent = total;
			calcTotalItem(cart);
			calcTotalMoney(cart);
			setStorageItem('cart', cart);
		}
	});
};

const decreaseAmount = (cart) => {
	getElement('.cart-items').addEventListener('click', function (e) {
		const element = e.target.parentElement;
		const elementId = e.target.parentElement.dataset.id;
		if (element.classList.contains('cart-item-decrease-btn')) {
			if (Number(element.previousElementSibling.textContent) > 1) {
				cart = cart.map((item) => {
					if (item.id === elementId) {
						item.amount = item.amount - 1;
					}
					return item;
				});
				const total = Number(element.previousElementSibling.textContent) - 1;
				element.previousElementSibling.textContent = total;
			} else {
				element.parentElement.parentElement.remove();
				cart = cart.filter((item) => item.id !== elementId);
			}
			calcTotalItem(cart);
			calcTotalMoney(cart);
			setStorageItem('cart', cart);
		}
	});
};

const updateCartItemAmount = (cartItem) => {
	const found = cart.find((item) => item.id === cartItem.id);
	let total = 1;
	if (found) {
		cart = cart.map((item) => {
			if (item.id === cartItem.id) {
				item.amount += 1;
				total = item.amount;
			}
			return item;
		});
	} else {
		cart.push(cartItem);
	}
	return total;
};

const updateCartItemAmountDOM = (id, amount) => {
	const cartItemAmounts = [...document.querySelectorAll('.cart-item-amount')];
	cartItemAmounts.forEach((cartItemAmount) => {
		if (cartItemAmount.dataset.id === id) {
			cartItemAmount.textContent = amount;
		}
	});
};

const calcTotalItem = (cart) => {
	const total = cart.reduce((value, item) => {
		return (value += item.amount);
	}, 0);
	getElement('.cart-item-count').textContent = total;
};

const calcTotalMoney = (cart) => {
	const total = cart.reduce((value, item) => {
		return (value += item.price * item.amount);
	}, 0);
	getElement('.cart-total').textContent = `Total: ${formatPrice(total)}`;
};

const setupCartFunctionality = (cart) => {
	cart.forEach((item) => {
		addToCartDOM(item);
	});
	calcTotalItem(cart);
	calcTotalMoney(cart);
};

export const handleCart = (id) => {
	openCart();
	const cartItem = { ...store.filter((item) => item.id === id)[0], amount: 1 };
	const total = updateCartItemAmount(cartItem);
	if (total === 1) {
		addToCartDOM(cartItem);
	} else {
		updateCartItemAmountDOM(cartItem.id, total);
	}
	calcTotalItem(cart);
	calcTotalMoney(cart);
	setStorageItem('cart', cart);
};

increaseAmount(cart);
decreaseAmount(cart);
setupCartFunctionality(cart);

export const addToCart = (element) => {
	element.addEventListener('click', function (e) {
		const element = e.target;
		if (
			element.classList.contains('product-cart-btn') ||
			element.parentElement.classList.contains('product-cart-btn')
		) {
			const id = element.parentElement.dataset.id || element.dataset.id;
			handleCart(id);
		}
	});
};

export const removeFromCart = () => {
	getElement('.cart-items').addEventListener('click', function (e) {
		if (e.target.classList.contains('cart-item-remove-btn')) {
			const id = e.target.dataset.id;
			cart = cart.filter((item) => item.id !== id);
			e.target.parentElement.parentElement.remove();
			calcTotalItem(cart);
			calcTotalMoney(cart);
			setStorageItem('cart', cart);
		}
	});
};
removeFromCart();
