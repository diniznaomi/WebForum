import "./Cards.css";
import { sportsFutebolDataMock } from "../../Utils/mocks/sportsFutebolDataMock";
import { sportsBasqueteDataMock } from '../../Utils/mocks/sportsBasqueteDataMock';
import { useSelector } from "react-redux";
import { UnitCard } from "./UnitCard";
import { Sidebar } from "../Sidebar/sidebar";

export const CardsContainer = () => {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const data = selectedCategory === 'soccer' ? sportsFutebolDataMock : sportsBasqueteDataMock;

  return (
    <div className="container-fluid p-0 m-0 w-100">
      <div className="row cardContainer m-0 w-100">
        <Sidebar/>
          <div className="col-6">
            {data.map((c, key) => (
              <div className="" key={key}>
                <div className="row">
                  {c.games.map((game, key) => (
                    <div className="col-12 p-0" key={key}>
                      <UnitCard game={game} key={key} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
		    <Sidebar/>
      </div>
    </div>
  );
};
