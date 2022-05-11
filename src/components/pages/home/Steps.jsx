import React from "react";

function Steps({ data }) {
	return (
		<>
			<section id="steps">
				<div className="contain text-center">
					<div className="content">
						<h2 className="heading">{data.heading}</h2>
						<p>{data.para}</p>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="inner">
										<div className="num">{val.num}</div>
										<div className="txt">
											<h4>{val.title}</h4>
											<p>{val.para}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Steps;
