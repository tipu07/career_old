import React from "react";
import Data from "../../dummy";
import Detail from "./Detail";

const EventDetail = () => {
	return (
		<>
			<Detail data={Data.events} />
		</>
	);
};

export default EventDetail;
