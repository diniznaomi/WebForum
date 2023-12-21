import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './CarouselItem.css';

export const CarouselItem = (props) => {
	const mappingImg = props.images? props.images.map((img, k) => {
		return (
			<Carousel.Item key={k}>
				<img className="d-block w-100 slideImg p-2 imageStyle" alt="First" src={img} />
			</Carousel.Item>
		);
	}): null;

	return (
		<Carousel>
			{mappingImg}
		</Carousel>
	);
};
