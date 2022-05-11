import React from "react";

const TopBar = ({ data, firstStepDone, secondStepDone, thirdStepDone }) => {
	return (
		<>
			<ul className="top_bar">
				<li>
					<div className="icon">{data[0].num}</div>
					<strong>{data[0].text}</strong>
				</li>
				<li>
					<div className="icon">{data[1].num}</div>
					<strong>{data[1].text}</strong>
				</li>
				<li>
					<div className="icon">{data[2].num}</div>
					<strong>{data[2].text}</strong>
				</li>
				<li>
					<div className="icon">{data[3].num}</div>
					<strong>{data[3].text}</strong>
				</li>
			</ul>
		</>
	);
};

export default TopBar;
