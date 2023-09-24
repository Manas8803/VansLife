import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Component imports
import Home from "./Pages/Home";
import About from "./Pages/About";

//? Van components
import { VanDetail, Vans } from "./Pages/Vans/Index";

//? Host components
import {
	Dashboard,
	Income,
	Reviews,
	HostVans,
	HostVanDetail,
} from "./Pages/Host/Index";

//* Server
import "./FakeServer";
import { HostLayout, Layout } from "./Layout/Index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetail />} />
					<Route path="host" element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						//& Don't include '/' at the beginning.
						<Route path="reviews" element={<Reviews />} />
						<Route path="vans" element={<HostVans />} />
						<Route path="vans/:id" element={<HostVanDetail />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
