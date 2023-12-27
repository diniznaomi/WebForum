import { Navbar } from "../Navbar/Navbar";
import "./CardPage.css";
import { Sidebar } from "../Sidebar/sidebar";
import { Categories } from "../Categories/Categories";
import { useLocation } from "react-router-dom";
import { CarouselItem } from "../Carousel/CarouselItem";

export const CardPage = () => {
	const location = useLocation();
    const dataInfo = location.state.content;

	return (
		<div className="full-height">
			<Navbar />
			<div className="categoriesContentStyle ">
				<Categories />
			</div>
			<div className="container-fluid p-0 m-0 full-height">
				<div className="row cardContainer m-0 full-height">
					<Sidebar/>
					<div className="col-6">
							<div className="row">
								<div className="col-12 p-0" >
									<CarouselItem data={dataInfo.images} />
								</div>
								<div className="col-12 p-0 img1" >
								
								</div>
							</div>
					</div>
						<Sidebar/>
				</div>
				</div>
		</div>
	);
};
