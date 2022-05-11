import React, { useState } from "react";
import Slider from "react-slick";

const Journey = ({ data }) => {
	const [journey, setJourney] = useState();
	const [journeyThumbs, setJourneyThumbs] = useState();
	const settings = {
		// dots: true,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	const settings_thumb = {
		// dots: true,
		infinite: true,
		fade: true,
		draggable: false,
		swipe: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<section id="journey">
				<div className="contain">
					<div className="content text-center">
						<h2 className="heading">{data.heading}</h2>
					</div>
					<div className="flex_row main_row row">
						<div className="col col-md-6 pe-md-5">
							<div id="slick-journey">
								<Slider {...settings} asNavFor={journeyThumbs} ref={(slider1) => setJourney(slider1)}>
									{data.slider.map((val) => {
										return (
											<div className="item" key={val.id}>
												<div className="inner">
													<h4>{val.title}</h4>
													<p>{val.para}</p>
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
						<div className="col col-md-6 ps-md-5">
							<div id="slick-journey-thumbs">
								<Slider {...settings_thumb} asNavFor={journey} ref={(slider2) => setJourneyThumbs(slider2)}>
									{data.thumbs.map((val) => {
										return (
											<div className="item" key={val.id}>
												<div className="fig">
													<img src={val.src} alt={val.alt} />
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Journey;
