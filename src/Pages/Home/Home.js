import { CardsContainer } from "../../Components/Cards/CardsContainer";
import { Categories } from "../../Components/Categories/Categories";
import { Navbar } from "../../Components/Navbar/Navbar";
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
					
					<CardsContainer />
				</div>
			</body>
		</>
	);
};
