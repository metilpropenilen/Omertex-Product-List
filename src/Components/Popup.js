import React from 'react';
import {connect} from "react-redux";
import {eraseProduct} from "../Actions";

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// componentDidMount = () => document.addEventListener('keydown', (e) => e.which === 27 ? this.props.hidePopup() : null);
	render() {
		return (
			<div className='product-popup-container'>
				<div className="product-popup-box">
					<div className="product-popup-icon">
						{<img src={require(`../images/${this.props.product.image}`)} alt="product-icon"/>}
					</div>
					<div className="product-popup-info">
						<p className="product-popup-name">Product name: {this.props.product.name}</p>
						<p className="product-popup-price">Price: {this.props.product.price}$</p>
						<p className="product-popup-addinfo">Additional info: {this.props.product.addInfo}</p>
						<p className="product-popup-instock-status">In stock
							status: {this.props.product.inStock ? "In stock" : "Not available"}</p>
					</div>
				</div>
				<span className='product-popup-close' onClick={this.props.eraseProduct}/>
			</div>
		);
	}
}

export default connect(null, {eraseProduct})(Popup);