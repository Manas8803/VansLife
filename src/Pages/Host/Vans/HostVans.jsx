import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../Auth";
import { Suspense } from "react";

export async function HVloader({ request }) {
	await requireAuth(request);
	return defer({ vans: getHostVans() });
}

export function HostVans() {
	const vansPromise = useLoaderData();

	function renderVans(vans) {
		const Van = vans.map((van) => (
			<div className="host-van-link-wrapper" key={van.id}>
				<Link to={`./${van.id}`}>
					<div className="host-van-single" key={van.id}>
						<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
						<div className="host-van-info">
							<h3>{van.name}</h3>
							<p>${van.price}/day</p>
						</div>
					</div>
				</Link>
			</div>
		));

		return <section>{Van}</section>;
	}

	return (
		<>
			<section>
				<h1 className="host-vans-title">Your listed vans</h1>
				<div className="host-vans-list">
					<Suspense fallback={<Loader />}>
						<Await resolve={vansPromise.vans}>{renderVans}</Await>
					</Suspense>
				</div>
			</section>
		</>
	);
}

function Loader() {
	return (
		<div className="spinner-container" style={{ paddingBottom: "2rem" }}>
			<div className="spinner"></div>
		</div>
	);
}
