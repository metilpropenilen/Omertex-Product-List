import React from 'react';
import './App.css';
import Product from "./Components/Product";

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
			filter: ''
		};
	}

	handleChange = (e) => this.setState({filter: e.target.value});

	render() {
		return (
			<div className="App">
				<input type='text' onChange={this.handleChange} value={this.state.filter}/>
				{this.state.products.map(product => product.name.includes(this.state.filter) ?
					<Product key={product.id} product={product}/> : null)}
			</div>
		);
	}
}

export default App;