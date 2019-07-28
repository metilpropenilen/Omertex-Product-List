const selectedProductReducer = (state = null, action)=> {
	switch (action.type) {
		case "SELECT_PRODUCT": return action.payload;
		case "ERASE_PRODUCT": return null;
		default: return state;
	}
};

export default selectedProductReducer;