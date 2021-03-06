import React from "react";
import SearchBar from "../../common/SearchBar";
import JobFilter from "./JobFilter";
import JobListing from "./JobListing";

const JobList = ({ data }) => {
	return (
		<>
			<section id="open_jobs">
				<div className="top_blk">
					<div className="contain">
						<SearchBar />
					</div>
				</div>
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-md-4">
							<JobFilter />
						</div>
						<div className="col-md">
							<div className="top_head">
								<div className="txt">
									<h3>{data.heading}</h3>
									<p>{data.show_result}</p>
								</div>
								<div className="btn_blk">
									<select name="" id="" className="input">
										<option value="">Sort by</option>
										<option value="">Newest Listings</option>
										<option value="">Oldest Listings</option>
										<option value="">Closest</option>
									</select>
								</div>
							</div>
							<JobListing listing={data.jobs} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobList;
