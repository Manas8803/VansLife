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
import { LoginForm, loginLoader } from "./Utility";
import { HostLayout, Layout } from "./Layout/Index";
import PageNotFound from "./Utility/PageNotFound";

//? Van components
import { VanDetail, Vans, vansLoader, VDloader } from "./Pages/Vans/Index";
import { requireAuth } from "./Auth";

//? Host components
import {
	Dashboard,
	Income,
	Reviews,
	HostVans,
	HostVanDetail,
	HVDloader,
	HVloader,
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
			<Route path="login" element={<LoginForm />} loader={loginLoader} />
			<Route path="vans/:id" element={<VanDetail />} loader={VDloader} />
			<Route
				path="host"
				element={<HostLayout />}
				loader={async () => await requireAuth()}
			>
				<Route
					index
					element={<Dashboard />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async () => await requireAuth()}
				/>
				//& Don't include '/' at the beginning.
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async () => await requireAuth()}
				/>
				<Route path="vans" element={<HostVans />} loader={HVloader} />
				<Route path="vans/:id" element={<HostVanDetail />} loader={HVDloader}>
					<Route
						index
						element={<Details />}
						loader={async () => await requireAuth()}
					/>
					<Route
						path="pricing"
						element={<Pricing />}
						loader={async () => await requireAuth()}
					/>
					<Route
						path="photos"
						element={<Photos />}
						loader={async () => await requireAuth()}
					/>
				</Route>
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
