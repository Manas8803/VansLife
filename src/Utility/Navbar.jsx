import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<header className="navbar">
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<nav>
					<Link to="/about">About</Link>
				</nav>
				<nav>
					<Link to="/vans">Vans</Link>
				</nav>
			</header>
		</>
	);
}
