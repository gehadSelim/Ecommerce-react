const DUMMY_PRODUCTS = [
	{
		id: 1,
		productImage: "",
		productTitle: "First TODO",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "16/5/2023",
	},
	{
		id: 1,
		productImage: "",
		productTitle: "First TODO",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "16/5/2023",
	},
	{
		id: 1,
		productImage: "",
		productTitle: "First TODO",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "16/5/2023",
	},
	{
		id: 1,
		productImage: "",
		productTitle: "First TODO",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "16/5/2023",
	},
];

const initialState = {
	productArr: DUMMY_PRODUCTS,
	showproductDetailsFlag: false,
	selectedProduct: {
		id: 0,
		productImage: "",
		productTitle: "",
		productDetails: "",
		productPrice: "",
	},
};

export const VIEW_PRODUCT_DETAILS = "VIEW_PRODUCT_DETAILS";

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIEW_PRODUCT_DETAILS:
			console.log(action);
			const selectedProduct = action.payload
				? state.productArr.find((product) => product.id === action.payload)
				: null;
			return {
				...state,
				showproductDetailsFlag: !state.showproductDetailsFlag,
				selectedProduct: selectedProduct,
			};
		default:
			return state;
	}
};

export default productReducer;
