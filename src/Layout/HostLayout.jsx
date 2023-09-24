import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
	//^ We can give the end prop to NavLink if the current url is longer than the 'to' attribute.
	//^ Example :
	//? 						 	  URL		  isActive
	//* <NavLink to="/host" end />	 /host 			true
	//* <NavLink to="/host" end /> 	/host/123 		false (it would have been true if we did not gave it the end prop)
	return (
		<>
			<nav className="HostLayout-nav">
				<NavLink
					to="." //& This is a relative link. Similar to our directory structure in files.
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
					end
				>
					DashBoard
				</NavLink>
				<NavLink
					to="./income"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					Income
				</NavLink>
				<NavLink
					to="./vans"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					Vans
				</NavLink>
				<NavLink
					to="./reviews"
					className={({ isActive }) => (isActive ? "selected" : "not-selected")}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
