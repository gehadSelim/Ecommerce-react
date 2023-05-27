const initialState = {
	cartArr: [],
	user: {
		id: 1,
		email: "gehad@gmail.com",
		name: "Gehad Ahmed",
	},
};
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const newCartItem = {
				id: action.payload.id,
				productTitle: action.payload.title,
				productImage: action.payload.details,
				productPrice: action.payload.date,
			};
			return { ...state, cartArr: [...state.cartArr, newCartItem] };

		case REMOVE_FROM_CART:
			let newArr = state.cartArr.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			return {
				...state,
				cartArr: newArr,
			};

		default:
			return state;
	}
};

export default cartReducer;
