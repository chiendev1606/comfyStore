import { formatPrice, getElement } from '../utils.js';

const addToCartDOM = (cartItem) => {
	const {
		amount,
		id,
		name,
		price,
		thumbnails: { large: img },
	} = cartItem;
	const article = document.createElement('article');
	article.setAttribute('data-id', id);
	article.classList.add('cart-item');
	article.innerHTML = `
    <img src="${img.url}" class="cart-item-img" alt="${name}">
	          <div>
	            <h4 class="cart-item-name">${name}</h4>
	            <p class="cart-item-price">${formatPrice(price)}</p>
	            <button class="cart-item-remove-btn" data-id="${id}">remove</button>
	          </div>
	          <div>
	            <button class="cart-item-increase-btn" data-id="${id}">
	              <i class="fas fa-chevron-up"></i>
	            </button>
	            <p class="cart-item-amount" data-id="${id}">${amount}</p>
	            <button class="cart-item-decrease-btn" data-id="${id}">
	              <i class="fas fa-chevron-down"></i>
	            </button>
	          </div>
  `;
	getElement('.cart-items').appendChild(article);

	// getElement('.cart-items').innerHTML = cart
	// 	.map((item) => {
	// 		const {
	// 			amount,
	// 			id,
	// 			name,
	// 			price,
	// 			thumbnails: { large: img },
	// 		} = item;
	// 		return `
	//   <article class="cart-item" data-id="${id}">
	//   <img src="${img.url}" class="cart-item-img" alt="${name}">
	//           <div>
	//             <h4 class="cart-item-name">${name}</h4>
	//             <p class="cart-item-price">${formatPrice(price)}</p>
	//             <button class="cart-item-remove-btn" data-id="${id}">remove</button>
	//           </div>
	//           <div>
	//             <button class="cart-item-increase-btn" data-id="${id}">
	//               <i class="fas fa-chevron-up"></i>
	//             </button>
	//             <p class="cart-item-amount" data-id="${id}">${amount}</p>
	//             <button class="cart-item-decrease-btn" data-id="${amount}">
	//               <i class="fas fa-chevron-down"></i>
	//             </button>
	//           </div>
	// </article>
	//   `;
	// 	})
	// 	.join('');
};

export default addToCartDOM;
