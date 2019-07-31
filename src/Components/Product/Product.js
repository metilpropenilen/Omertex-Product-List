import React from 'react';
import {connect} from "react-redux";
import {selectProduct, eraseProduct} from "../../Actions";
import style from './Product.module.scss'

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	showPopup = () => this.props.selectProduct([...this.props.products].find(elem => elem.id === this.props.product.id));

	render() {
		return (
			<div className={style["product-container"]} onClick={this.showPopup}>
				<div className={style["product-icon"]}>
					{<img src={require(`../../images/${this.props.product.image}`)} alt="product-icon"/>}
				</div>
				<div className={style["product-name"]}>
					<p>{this.props.product.name}</p>
				</div>
				<div className={style["product-price"]}>
					<p>{this.props.product.price}$</p>
				</div>
				<div hint={this.props.product.inStock ? "In stock" : "Not available"}
					 className={style[this.props.product.inStock ? "product-stock-available" : "product-stock-unavailable"]}/>
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