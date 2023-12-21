import "./Categories.css";
import football_1165187 from "../../Utils/images/football_1165187.png";
import basketball_1041168 from "../../Utils/images/basketball_1041168.png";
import { useState } from "react";

export const Categories = () => {
	const [categoryActive, setCategoryActive] = useState("soccer");

	return (
		<div className="container w-100 categoriesStyle">
			<ul class="nav nav-tabs border-0">
				<li className="nav-item">
					<button onClick={()=> setCategoryActive("soccer")} className={`rounded-top border-0 ${categoryActive === "soccer" ? "categoryBlockOnStyle" : "categoryBlockOffStyle"}`}>
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
					<button onClick={()=> setCategoryActive("basketball")} className={`rounded-top border-0 ${categoryActive === "basketball" ? "categoryBlockOnStyle" : "categoryBlockOffStyle"}`}>
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
