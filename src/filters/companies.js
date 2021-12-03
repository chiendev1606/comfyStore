import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const companiesDOM = getElement('.companies');

const setupCompanies = (store) => {
	const companies = ['all', ...new Set(store.map((item) => item.company))];
	companiesDOM.innerHTML = companies
		.map((item) => {
			return `
    <button class="company-btn">${item}</button>
    `;
		})
		.join('');
	const btnCompanyDOM = [...companiesDOM.querySelectorAll('.company-btn')];
	btnCompanyDOM.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			const btnContent = e.currentTarget.textContent;

			if (btnContent === 'all') {
				display(store, getElement('.products-container'));
			} else {
				const newStore = store.filter((item) => item.company === btnContent);
				display(newStore, getElement('.products-container'));
			}
		});
	});
};

export default setupCompanies;
