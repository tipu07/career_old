import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, logged }) {
	const data = {
		noti: {
			src: "/images/icon-bell.svg",
			alt: "Bell",
		},
		pro_btn: {
			dp: "/images/01.jpg",
			alt: "DP",
		},
	};
	return (
		<>
			<nav className="ease">
				{!logged ? (
					<div id="nav" className={active ? "active" : ""}>
						<ul id="lst">
							<li className="drop">
								<NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "")}>
									Explore
								</NavLink>
								<ul className="sub">
									<li>
										<Link to="?">Explore</Link>
									</li>
									<li>
										<Link to="?">Learn</Link>
									</li>
									<li>
										<Link to="?">Practice</Link>
									</li>
									<li>
										<Link to="?">Apply</Link>
									</li>
								</ul>
							</li>
							<li className="drop">
								<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
									Learn
								</NavLink>
								<ul className="sub">
									<li>
										<Link to="?">Explore</Link>
									</li>
									<li>
										<Link to="?">Learn</Link>
									</li>
									<li>
										<Link to="?">Practice</Link>
									</li>
									<li>
										<Link to="?">Apply</Link>
									</li>
								</ul>
							</li>
							<li className="drop">
								<NavLink to="/practice" className={({ isActive }) => (isActive ? "active" : "")}>
									Practice
								</NavLink>
								<ul className="sub">
									<li>
										<Link to="?">Explore</Link>
									</li>
									<li>
										<Link to="?">Learn</Link>
									</li>
									<li>
										<Link to="?">Practice</Link>
									</li>
									<li>
										<Link to="?">Apply</Link>
									</li>
								</ul>
							</li>
						</ul>
						<ul id="cta">
							<li>
								<Link to="/apply" className="site_btn long light stroke">
									Apply
								</Link>
							</li>
							<li>
								<Link to="/signin" className="site_btn long">
									Signup/Login
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<>
						<ul id="icon_btn">
							<li id="noti">
								<Link to="/notifications">
									<img src={data.noti.src} alt={data.noti.alt} />
								</Link>
							</li>
						</ul>
						<div id="pro_btn" className="drop_down">
							<div className="name">
								Arlie Anderson <span>online</span>
							</div>
							<div className="ico fill round drop_btn">
								<img src={data.pro_btn.dp} alt={data.pro_btn.alt} />
							</div>
							<div className="drop_cnt">
								<ul className="drop_lst">
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/profile-settings">Profile Settings</Link>
									</li>
									<li>
										<Link to="/statistics">Statistics</Link>
									</li>
									<li>
										<Link to="/mine-subscription">Subscription</Link>
									</li>
									<li>
										<Link to="/signin">Sign out</Link>
									</li>
								</ul>
							</div>
						</div>
					</>
				)}
			</nav>
		</>
	);
}

export default Navigation;
