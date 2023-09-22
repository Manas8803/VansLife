import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
	return (
		<>
			<nav className="HostLayout-nav">
				<NavLink
					to="/host"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					DashBoard
				</NavLink>
				<NavLink
					to="/host/income"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					Income
				</NavLink>
				<NavLink
					to="/host/reviews"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
