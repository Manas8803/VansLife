import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

//* Component imports
import Home from "./Pages/Home";
import About from "./Pages/About";
import { HostLayout, Layout } from "./Layout/Index";
import PageNotFound from "./Utility/PageNotFound";

//? Van components
import { VanDetail, Vans, vansLoader } from "./Pages/Vans/Index";

//? Host components
import {
	Dashboard,
	Income,
	Reviews,
	HostVans,
	HostVanDetail,
	Photos,
	Pricing,
	Details,
} from "./Pages/Host/Index";

//* Server
import "./FakeServer";
import Error from "./Utility/Error";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="*" element={<PageNotFound />} />
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="vans"
				element={<Vans />}
				loader={vansLoader}
				errorElement={<Error />} //& We can place this anywhere(only up the hierarchy) and the error here will bubble up the hierarchy.
			/>
			<Route path="vans/:id" element={<VanDetail />} />
			<Route path="host" element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="income" element={<Income />} />
				//& Don't include '/' at the beginning.
				<Route path="reviews" element={<Reviews />} />
				<Route path="vans" element={<HostVans />} />
				<Route path="vans" element={<HostVans />} />
				<Route path="vans/:id" element={<HostVanDetail />}>
					<Route index element={<Details />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="photos" element={<Photos />} />
				</Route>
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
