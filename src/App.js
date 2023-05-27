import React from "react";
import Navbar from "./Components/navBar/navbar";
import Slider from "./Components/Slider/slider";
import Footer from "./Components/footer/footer";
//import Product from "./Components/products/product";
import Category from "./Components/Slider/category";
import ProductList from "./Components/products/productList";
//import { connect, useDispatch } from "react-redux";
//import { store } from "../../Store/store";

function App() {
	return (
		<>
			<Navbar />
			<Slider />
			<Category />
			<ProductList />
			{/* <div className="container mt-5">
				<Product />
			</div> */}
			<Footer />
		</>
	);
}

export default App;
