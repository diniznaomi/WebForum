import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import './CarouselItem.css';

export const CarouselItem = (data) => {
	console.log(data.data);
	const mappingImg = data.data ? data.data.map((img, k) => {
		
		return (
			<Carousel.Item key={k}>
				<img className="d-block w-100 slideImg" alt="First" src={img} />
			</Carousel.Item>
		);
	}): null;

	return (
		<Carousel>
			{mappingImg}
		</Carousel>
	);
};