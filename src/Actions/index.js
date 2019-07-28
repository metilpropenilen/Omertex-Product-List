export const getProduct = () => {
	return {
		type: "GET_PRODUCT",
		payload: [
			{
				id: 0,
				name: 'Apple Magic Keyboard',
				image: 'keyboard.jpg',
				price: '200',
				addInfo: 'Apple',
				inStock: true
			}, {
				id: 1,
				name: 'Mouse',
				image: 'mouse.png',
				price: '100',
				addInfo: 'Logitech',
				inStock: false
			}, {
				id: 2,
				name: 'Macbook Pro',
				image: 'macbookpro.png',
				price: '2000',
				addInfo: 'Apple',
				inStock: true
			}]
	}
};


export const selectProduct = (product) => {
	return {
		type: "SELECT_PRODUCT",
		payload: product
	}
};

export const eraseProduct = () => {
	return {
		type: "ERASE_PRODUCT"
	}
};
