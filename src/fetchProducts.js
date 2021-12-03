import { allProductsUrl } from './utils.js';

const fetchProducts = async (api = allProductsUrl) => {
	try {
		const response = await fetch(api);
		if (response.status >= 200 && response.status <= 299) {
			return response.json();
		} else {
			console.error('failed to get data from api');
		}
	} catch (error) {
		console.error(error);
	}
};

export default fetchProducts;
