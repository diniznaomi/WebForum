import "./Cards.css";
import { sportsFutebolDataMock } from "../../Utils/mocks/sportsFutebolDataMock";
import {sportsBasqueteDataMock} from '../../Utils/mocks/sportsBasqueteDataMock';
import { useSelector } from "react-redux";
import { UnitCard } from "./UnitCard";

export const CardsContainer = () => {
	const selectedCategory = useSelector((state) => state.categories.selectedCategory);
	const data = selectedCategory === 'soccer'? sportsFutebolDataMock : sportsBasqueteDataMock;
	
	return (
		<div className="container p-0">
			<div className="row cardContainer ">
				{data.map((c, key) => {
					return (
						<div className="col-12 p-0" key={key}>
							<div key={key}>
								<div className="mt-4">
									<div className="row">
										{c.games.map((game, key) => {
											console.log(game)
											return (
												<div className="col-md-5 col-lg-4 col-xl-4 col-12 p-0" key={key}>
													<UnitCard game={game} key={key}/>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
