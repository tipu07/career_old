import React from "react";
import Data from "../../dummy";
import PageIntro from "../../common/PageIntro";
import Vision from "../../common/Vision";
import Categories from "../../common/Categories";
import Companies from "../../common/Companies";
import Strip from "../../common/Strip";

const Partner = () => {
	const { page_intro, vision, categories, companies, strip } = Data.partner;
	return (
		<>
			<PageIntro data={page_intro} />
			<Vision data={vision} />
			<Categories data={categories} />
			<Companies data={companies} />
			<Strip data={strip} />
		</>
	);
};

export default Partner;
