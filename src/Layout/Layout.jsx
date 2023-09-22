import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../Utility/";

export default function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
