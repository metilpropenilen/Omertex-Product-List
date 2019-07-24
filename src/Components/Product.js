import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='product-container'>
				<div className="product-icon">
					{<img src={require(`../images/${this.props.product.image}`)} alt="product-icon"/>}
				</div>
				<div className="product-name">
					<p>{this.props.product.name}</p>
				</div>
				<div className="product-price">
					<p>{this.props.product.price}$</p>
				</div>
			</div>
		);
	}
}

export default Product;