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
import { LoginForm, loginLoader, loginAction } from "./Utility";
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
				path="login"
				element={<LoginForm />}
				loader={loginLoader}
				action={loginAction}
			/>
			<Route
				path="vans"
				element={<Vans />}
				loader={vansLoader}
				errorElement={<Error />} //& We can place this anywhere(only up the hierarchy) and the error here will bubble up the hierarchy.
			/>
			<Route path="vans/:id" element={<VanDetail />} loader={VDloader} />

			<Route
				path="host"
				element={<HostLayout />}
				loader={async ({ request }) => await requireAuth(request)}
			>
				<Route
					index
					element={<Dashboard />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				//& Don't include '/' at the beginning('/' in the beginning means //&
				absolute path.).
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route path="vans" element={<HostVans />} loader={HVloader} />
				<Route path="vans/:id" element={<HostVanDetail />} loader={HVDloader}>
					<Route
						index
						element={<Details />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="pricing"
						element={<Pricing />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="photos"
						element={<Photos />}
						loader={async ({ request }) => await requireAuth(request)}
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
