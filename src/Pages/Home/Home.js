import { CardsContainer } from "../../Components/Cards/CardsContainer";
import { Categories } from "../../Components/Categories/Categories";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="fixed-top">
          <Navbar />
          <div className="categoriesContentStyle ">
            <Categories />
          </div>
        </div>
      </header>
      <body>
        <div className="cardsContentStyle">
          <CardsContainer />
        </div>
      </body>
    </>
  );
};
