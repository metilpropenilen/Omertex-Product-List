import React from 'react';
import { connect } from "react-redux";
import { addProduct } from "../../Actions";
import style from './AddProduct.module.scss'

class AddProduct extends React.Component {
	constructor(props) {
		super( props );
		this.state = {};
	}

	render() {
		return (
			<div className={style["add-product-popup-container"]}>
				<div className={style["add-product-popup-box"]}>
					<form action="">
						<p>
							<input type="text" name="name" placeholder='Name'/>
						</p>
						<p>
							<input type="number" name="price" placeholder="Price ($)"/>
						</p>
						<p>In stock:
							<input type="checkbox"/>
						</p>
						<p>Image:
							<input type="file"/>
						</p>
						<p>
							<textarea placeholder="Additional information"/>
						</p>
						<p>
							<button>Save</button>
						</p>
					</form>
				</div>
				<span className={style["add-product-popup-close"]} onClick={this.props.addProduct}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addProductStatus: state.addProductStatus
	}
};

export default connect( mapStateToProps, { addProduct } )( AddProduct );