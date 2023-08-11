import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import Navbar from "./Utility/Navbar";
import "./FakeServer";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
