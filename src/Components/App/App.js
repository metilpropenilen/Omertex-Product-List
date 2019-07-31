import React from 'react';
import {connect} from "react-redux";
import Product from "../Product/Product";
import Popup from "../Popup/Popup";
import { addProduct, getProduct } from "../../Actions";
import AddProduct from "../AddProduct/AddProduct";
import style from "./App.module.scss";

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
			<div className={style["App"]}>
				<div className={style["products-filter-container"]}>
					<input type='text' onChange={this.handleChange} value={this.state.filter}/>
					<span className={style["add-product"]} onClick={this.props.addProduct}/>
				</div>
				<div className={style["products-container"]}>
					{this.props.products.map(product => product.name.toLowerCase().includes(this.state.filter) &&
						<Product key={product.id} product={product} />)}
				</div>
				{this.props.selectedProduct && <Popup product={this.props.selectedProduct}/>}
				{this.props.addProductStatus && <AddProduct />}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedProduct: state.selectedProduct,
		products: state.products,
		addProductStatus: state.addProductStatus
	}
};

export default connect(mapStateToProps, {getProduct, addProduct})(App);