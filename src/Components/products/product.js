import { store } from "../../Store/store";
import { VIEW_PRODUCT_DETAILS } from "../../Store/Reducers/productReducer";
import { ADD_TO_CART } from "../../Store/Reducers/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react";

const Product = (props) => {
	const {
		productId,
		productImage,
		productTitle,
		productDetails,
		productPrice,
	} = props;

	const cardStyle = {
		width: "18rem",
	};
	return (
		<>
			<div className="card col-2 mx-2 my-3 p-0" style={cardStyle}>
				<img
					src={productImage}
					className="card-img-top"
					style={{ height: "300px" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{productTitle}</h5>
					<p className="card-text">{productDetails}</p>
				</div>
				<div className="bg-dark m-0 p-2">
					<button
						className="bg rounded-5 text-center px-4"
						onClick={() => {
							store.dispatch({
								type: ADD_TO_CART,
								payload: {
									productId: productId,
									productImage: productImage,
									productDetails: productDetails,
									productTitle: productTitle,
									productPrice: productPrice,
								},
							});
						}}
					>
						<i className="fa fa-shopping-cart fa-2x  text-dark text-center"></i>
					</button>
					{/* <button
							className="bg rounded"
							onClick={() => {
								store.dispatch({
									type: VIEW_PRODUCT_DETAILS,
									payload: productId,
								});
							}}
						>
							<Link
								to={`todoDetails`}
								style={{ textDecoration: "none", color: "black" }}
							>
								View
							</Link>
						</button> */}
					<span className="text-light">&nbsp; Price: {productPrice}$</span>
				</div>
			</div>
		</>
	);
};
export default Product;
