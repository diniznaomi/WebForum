import "./Categories.css";
import football_1165187 from "../../Utils/images/football_1165187.png";
import basketball_1041168 from "../../Utils/images/basketball_1041168.png";
import { React} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from "../../redux/Categories/categoriesReducer";

export const Categories = () => {
	const selectedCategory = useSelector((state) => state.categories.selectedCategory);
	const dispatch = useDispatch();

	const handleCategoryClick = (category) => {
		dispatch(setCategory(category));
	};
	  

	return (
		<div className="container w-100 categoriesStyle">
			<ul class="nav nav-tabs border-0">
				<li className="nav-item">
					<button onClick={()=> handleCategoryClick("soccer")} className={`rounded-top border-0 ${selectedCategory === "soccer" ? "categoryBlockOnStyle" : "categoryBlockOffStyle"}`}>
						<span className="nav-link d-flex align-items-center border-0">
							<img
								className="categoryIcon"
								src={football_1165187}
								width="15"
								height="15"
								alt="logo"
							/>
							<span className="gameStyle">Futebol</span>
						</span>
					</button>
				</li>
				<li className="nav-item">
					<button onClick={()=> handleCategoryClick("basketball")} className={`rounded-top border-0 ${selectedCategory === "basketball" ? "categoryBlockOnStyle" : "categoryBlockOffStyle"}`}>
						<span class="nav-link d-flex align-items-center border-0">
							<img
								className="categoryIcon "
								src={basketball_1041168}
								width="15"
								height="15"
								alt="logo"
							/>
							<span className="gameStyle">Basquete</span>
						</span>
					</button>
				</li>
			</ul>
		</div>
	);
};
