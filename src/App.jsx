import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//* Component imports
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";
import Navbar from "./Utility/Navbar";

//* Server
import "./FakeServer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
				<Route path="/vans/:id" element={<VanDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
