import slide1 from "../../assets/images/slider_1.jpg";
const Slider = () => {
	const imgStyle = {
		height: "600px",
	};
	return (
		<div className="container-fluid p-0 mt-5 ">
			<div
				id="carouselExampleControls"
				className="carousel slide mt-5 "
				data-bs-ride="carousel"
			>
				<div className="carousel-inner ">
					<div className="carousel-item active position-relative">
						<h3 className="position-absolute top-50 start-0 banner_taital ps-5">
							Beauty <br />
							Cosmetics
						</h3>
						<img
							src={slide1}
							className="d-block w-100 "
							style={imgStyle}
							alt="..."
						/>
					</div>
					<div className="carousel-item position-relative">
						<h3 className="position-absolute top-50 start-0 banner_taital ps-5">
							Beauty <br />
							Cosmetics
						</h3>
						<img
							className="d-block w-100"
							src="https://images.pexels.com/photos/912992/pexels-photo-912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="..."
							style={imgStyle}
						/>
					</div>
					<div className="carousel-item position-relative">
						<h3 className="position-absolute top-50 start-0 banner_taital ps-5">
							Beauty <br />
							Cosmetics
						</h3>
						<img
							src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							className="d-block w-100"
							alt="..."
							style={imgStyle}
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};
export default Slider;
