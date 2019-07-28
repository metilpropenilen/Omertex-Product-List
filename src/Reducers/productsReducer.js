const productsReducer = () => {
	return [
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
		}];
};

export default productsReducer;