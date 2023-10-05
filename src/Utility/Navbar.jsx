import { Link, NavLink, useNavigate } from "react-router-dom";
import icon from "../assets/images/User circle.svg";
import logout from "../assets/images/logout.svg";

export default function Navbar() {
	const navigate = useNavigate();
	function fakeLogOut() {
		localStorage.removeItem("loggedIn");
		navigate("/login");
	}

	const isLoggedIn = localStorage.getItem("loggedIn");
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
				{!isLoggedIn && (
					<NavLink
						style={{ display: "inline" }}
						to="/login"
						className={({ isActive }) => (isActive ? "nav-selected" : null)}
					>
						<img src={icon} alt="" />
					</NavLink>
				)}
				{isLoggedIn && (
					<img
						src={logout}
						alt=""
						onClick={fakeLogOut}
						className="logout-icon"
					/>
				)}
			</header>
		</>
	);
}
