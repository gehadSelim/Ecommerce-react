import styles from "./footer.module.css";
const Footer = () => {
	return (
		<div className="bg-dark">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<a
						href="/"
						className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
					>
						<h3 className={styles.font}>&nbsp; Beautiful</h3>
					</a>
					<span className="mb-3 mb-md-0 text-body-secondary text-light">
						© 2023 By Gehad Ahmed
					</span>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
