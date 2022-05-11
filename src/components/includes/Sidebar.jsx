import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, active }) => {
	const data = {
		title: "Career Guid.",
		list: [
			{
				id: 1,
				btn: "About us",
				btn_link: "/about",
			},
			{
				id: 2,
				btn: "Careers",
				btn_link: "/careers",
			},
			{
				id: 3,
				btn: "Student Success Story",
				btn_link: "/student-success-story",
			},
			{
				id: 4,
				btn: "Universities Case Study",
				btn_link: "/case-study",
			},
		],
		sm_list: [
			{
				id: 1,
				btn: "FAQ's & Support Center",
				btn_link: "/faq",
			},
			{
				id: 2,
				btn: "Get in Touch",
				btn_link: "/contact",
			},
			{
				id: 3,
				btn: "Partner with us",
				btn_link: "/partner-with-us",
			},
		],
	};
	return (
		<>
			<aside id="sidebar" className={active ? "active" : ""}>
				<div className="inside">
					<h3 className="color">{data.title}</h3>
					<ul className="list size_3">
						{data.list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.btn_link} onClick={toggle}>
										{val.btn}
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className="sm_list">
						{data.sm_list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.btn_link} onClick={toggle}>
										{val.btn}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
