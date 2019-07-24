import React from 'react';
import './style/App.css';
import Product from "./Components/Product";
import Popup from "./Components/Popup";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
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
				}],
			filter: '',
			showPopup: false,
			selectedProduct: null
		};
	}

	handleChange = (e) => this.setState({filter: e.target.value.toLowerCase()});
	showPopup = () => this.setState({showPopup: true});
	hidePopup = () => this.setState({showPopup: false, selectedProduct: null});
	selectProduct = (id) => {
		let product = [...this.state.products].find(elem=> elem.id === id);
		this.setState({selectedProduct: product}, this.showPopup);
	};


	render() {
		return (
			<div className="App">
				<div className="products-filter-container">
					<input type='text' onChange={this.handleChange} value={this.state.filter}/>
				</div>
				<div className="products-container">
					{this.state.products.map(product => product.name.toLowerCase().includes(this.state.filter) ?
						<Product key={product.id} product={product} show={this.selectProduct}/> : null)}
				</div>
				{this.state.showPopup && <Popup product={this.state.selectedProduct} close={this.hidePopup}/>}
			</div>
		);
	}
}

export default App;