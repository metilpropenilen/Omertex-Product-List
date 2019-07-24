import React from 'react';
import './App.css';
import Product from "./Components/Product";
import Popup from "./Components/Popup";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					id: 0,
					name: 'keyboard',
					image: 'keyboard.jpg',
					price: '100',
					addInfo: 'lenovo',
					inStash: false
				}, {
					id: 1,
					name: 'mouse',
					image: 'mouse.png',
					price: '200',
					addInfo: 'realtek',
					inStash: true
				}],
			filter: '',
			showPopup: false,
			selectedProduct: null
		};
	}

	handleChange = (e) => this.setState({filter: e.target.value});
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
					{this.state.products.map(product => product.name.includes(this.state.filter) ?
						<Product key={product.id} product={product} show={this.selectProduct}/> : null)}
				</div>
				{this.state.showPopup && <Popup product={this.state.selectedProduct} close={this.hidePopup}/>}
			</div>
		);
	}
}

export default App;