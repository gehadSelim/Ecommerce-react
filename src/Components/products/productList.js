import { store } from "../../Store/store";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import Product from "./product";

const ProductList = () => {
	const productArr = store.getState().products.productArr;
	if (productArr.length === 0) {
		return (
			<div className="row text-center">
				<h3>No Products Available</h3>
			</div>
		);
	}

	if (productArr.length > 0) {
		return (
			<div className="container">
				<h2 className="title text-center">Our Products</h2>
				<div className="row justify-content-center">
					{productArr.map((product, index) => (
						<Product
							key={product.id}
							productId={product.id}
							productImage={product.productImage}
							productTitle={product.productTitle}
							productDetails={product.productDetails}
							productPrice={product.productPrice}
						/>
					))}
					<Outlet />
				</div>
			</div>
		);
	}
};
const listingToStateChanges = (state) => {
	return {
		productArr: state.products.productArr,
	};
};

export default connect(listingToStateChanges)(ProductList);
