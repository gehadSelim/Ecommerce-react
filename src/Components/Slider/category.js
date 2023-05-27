const Category = () => {
	return (
		<>
			<div className="container">
				<h2 className="title text-center">Our Categories</h2>

				<div className="row justify-content-center">
					<div className="col-md-3 col-sm-4 p-0 cat_card mx-2">
						<img
							src="https://images.pexels.com/photos/4938450/pexels-photo-4938450.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							className="cat_img w-100"
						/>
						<p className="cat_name">Skin care</p>
					</div>
					<div className="col-md-3 col-sm-4 p-0 cat_card mx-2">
						<img
							src="https://media.istockphoto.com/id/1221677097/photo/make-up-cosmetics-products-against-pink-color-background.jpg?b=1&s=612x612&w=0&k=20&c=rNb6YwDw6XuiseWgxV-b5Of-sfSbVt4NTP-PGGfqen0="
							alt=""
							className="cat_img w-100"
						/>
						<p className="cat_name">Makeup</p>
					</div>

					<div className="col-md-3 col-sm-4 p-0 cat_card mx-2">
						<img
							src="https://images.pexels.com/photos/8365693/pexels-photo-8365693.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							className="cat_img w-100"
						/>
						<p className="cat_name">Perfumes</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Category;
