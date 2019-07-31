const addProductReducer = (state = false, action)=> {
	switch (action.type) {
		case "ADD_PRODUCT": {
			return !state;
		}
		default: return state;
	}
};

export default addProductReducer;