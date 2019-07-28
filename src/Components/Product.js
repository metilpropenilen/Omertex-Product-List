import React from 'react';
import {connect} from "react-redux";
import {selectProduct, eraseProduct} from "../Actions";

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	showPopup = () => this.props.selectProduct([...this.props.products].find(elem => elem.id === this.props.product.id));

	render() {
		return (
			<div className='product-container' onClick={this.showPopup}>
				<div className="product-icon">
					{<img src={require(`../images/${this.props.product.image}`)} alt="product-icon"/>}
				</div>
				<div className="product-name">
					<p>{this.props.product.name}</p>
				</div>
				<div className="product-price">
					<p>{this.props.product.price}$</p>
				</div>
				<div hint={this.props.product.inStock ? "In stock" : "Not available"}
					 className={this.props.product.inStock ? "product-stock-available" : "product-stock-unavailable"}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products
	}
};

export default connect(mapStateToProps, {selectProduct, erasePopup: eraseProduct})(Product);