import styles from "./navbar.module.css";
const Navbar = () => {
	return (
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 px-4 mb-3 shadow-sm bg fixed-top">
				<div className="col-md-3 mb-2 mb-md-0">
					<a className="d-inline-flex link-body-emphasis text-decoration-none">
						<h3 className="text-dark">Beautiful</h3>
					</a>
				</div>

				<div className="d-flex align-items-center">
					<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 me-0 me-md-5">
						<li>
							<a href="#" className="nav-link px-2 link-dark">
								Home
							</a>
						</li>

						<li>
							<a className="nav-link px-2 link-dark">About</a>
						</li>
					</ul>
					<a className="position-relative">
						<i className="fa fa-shopping-cart fa-2x me-5 text-dark"></i>
						<div className={styles.cartNo}>5</div>
					</a>
				</div>
			</header>
		</div>
	);
};
export default Navbar;
