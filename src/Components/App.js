import React from 'react';
import '../style/App.css';
import Product from "./Product";
import Popup from "./Popup";
import {connect} from "react-redux";
import {getProduct} from "../Actions";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
		};
	}

	handleChange = (e) => this.setState({filter: e.target.value.toLowerCase()});

	render() {
		return (
			<div className="App">
				<div className="products-filter-container">
					<input type='text' onChange={this.handleChange} value={this.state.filter}/>
				</div>
				<div className="products-container">
					{this.props.products.map(product => product.name.toLowerCase().includes(this.state.filter) ?
						<Product key={product.id} product={product} /> : null)}
				</div>
				{this.props.selectedProduct && <Popup product={this.props.selectedProduct}/>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedProduct: state.selectedProduct,
		products: state.products,
	}
};

export default connect(mapStateToProps, {getProduct})(App);