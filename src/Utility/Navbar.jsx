import { NavLink, Link } from "react-router-dom";
import icon from "../assets/images/User circle.svg";

export default function Navbar() {
	return (
		<>
			<header className="navbar">
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<NavLink
					to="/host"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					Host
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					About
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					Vans
				</NavLink>
				<NavLink
					style={{ display: "inline" }}
					to="/Login"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					<img src={icon} alt="" />
				</NavLink>
			</header>
		</>
	);
}
