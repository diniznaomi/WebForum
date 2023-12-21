import { Cards } from "../../Components/Cards/Cards";
import { Categories } from "../../Components/Categories/Categories";
import { Navbar } from "../../Components/NavBar/Navbar";
import "./Home.css";

export const Home = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<body>
				<div className="categoriesContentStyle">
					<Categories />
				</div>

				<div className="cardsContentStyle">
					<Cards />
				</div>
			</body>
		</>
	);
};
