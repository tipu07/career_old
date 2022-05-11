import React from "react";
import TopBar from "./TopBar";

const Register = ({ data }) => {
	return (
		<>
			<section id="interview">
				<div className="contain">
					<h2 className="heading">{data.heading}</h2>
					<TopBar data={data.top_bar} />
					<form action="" method="POST">
						<fieldset className="active">
							<h4 className="heading">Please introduce yourself. Stop the recording and go to next step.</h4>
						</fieldset>
						<div className="vid_blk">
							<video autoPlay loop muted playsInline controls>
								<source src={data.video} type="video/mp4" />
							</video>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Register;
