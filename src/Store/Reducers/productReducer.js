const DUMMY_PRODUCTS = [
	{
		id: 1,
		productImage:
			"https://media.istockphoto.com/id/1346580320/photo/eyeshadow-powder-with-brush-matte-color-palette-for-makeup-on-pink-background.jpg?s=612x612&w=0&k=20&c=eplAd9QfXM_hyONSG-7UqBcF4gXUWPn4bKLab4qlRuQ=",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "20",
	},
	{
		id: 2,
		productImage:
			"https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "89",
	},
	{
		id: 3,
		productImage:
			"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "25",
	},
	{
		id: 4,
		productImage:
			"https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "66",
	},
	{
		id: 5,
		productImage:
			"https://images.pexels.com/photos/211342/pexels-photo-211342.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "28",
	},
	{
		id: 6,
		productImage:
			"https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "73",
	},
	{
		id: 7,
		productImage:
			"https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "33",
	},
	{
		id: 8,
		productImage:
			"https://images.pexels.com/photos/2535928/pexels-photo-2535928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "45",
	},
	{
		id: 9,
		productImage:
			"https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "90",
	},
	{
		id: 10,
		productImage:
			"https://media.istockphoto.com/id/1299164489/photo/make-up-palette-and-brushes-professional-eyeshadow-palette.jpg?s=612x612&w=0&k=20&c=bbsPXRO_IzBWcLDtulNMn93534aSN_SRnZsdY0vwxao=",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "70",
	},
	{
		id: 11,
		productImage:
			"https://images.pexels.com/photos/2637820/pexels-photo-2637820.jpeg?auto=compress&cs=tinysrgb&w=600",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "30",
	},
	{
		id: 12,
		productImage:
			"https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		productTitle: "Beauty brush",
		productDetails: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `,
		productPrice: "50",
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
