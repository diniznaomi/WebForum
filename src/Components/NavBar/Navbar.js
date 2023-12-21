import "./Navbar.css";
import logo from '../../Utils/images/logo.png'

export const Navbar = () => { 
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbarColor">
			<div className="container-fluid mt-2 mb-2">
				<span className="navbar-brand">
					<img
						src={logo}
						width="45"
						height="44"
						alt="logo"
					/>
					<span className="mt-4 titleStyle">
						<b>iBet Probability</b>
					</span>
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0 searchContainer">
						<div className="rounded-pill m-auto px-2 w-100 shadow-sm border border-2">
							<form className="d-flex w-100 m-1" role="search">
								<input
									className="searchField border-0 m-1 rounded-pill input-lg w-100"
									type="search"
									placeholder="Start your search"
									aria-label="Search"
								/>
								<button
									className="btn rounded-circle px-2 border-0 searchButton"
									type="submit"
								>
									<i className="bi bi-search text-light"></i>
								</button>
							</form>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};
