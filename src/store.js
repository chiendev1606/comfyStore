import { getStorageItem, setStorageItem } from './utils.js';
let store = [];

const setupStore = () => {
	store = getStorageItem('store');
	store = store.map((item) => {
		const {
			id,
			fields: {
				name,
				featured,
				price,
				company,
				image: [{ thumbnails }],
			},
		} = item;
		return { id, name, price, featured, thumbnails, company };
	});
};
setupStore();
const findProduct = () => {};
export { store, setupStore, findProduct };
