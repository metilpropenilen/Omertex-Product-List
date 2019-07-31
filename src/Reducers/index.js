import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import selectedProductReducer from "./selectedProductReducer";
import addProductReducer from "./addProductReducer";

const rootReducer = combineReducers({
	products: productsReducer,
	selectedProduct: selectedProductReducer,
	addProductStatus: addProductReducer,
});

export default rootReducer;