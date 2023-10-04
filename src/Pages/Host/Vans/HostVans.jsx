import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../Auth";

export async function HVloader({ request }) {
	await requireAuth(request);
	return getHostVans();
}

export function HostVans() {
	const vans = useLoaderData();

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
	return (
		<>
			<section>
				<h1 className="host-vans-title">Your listed vans</h1>
				<div className="host-vans-list">
					<section>{Van}</section>
				</div>
			</section>
		</>
	);
}
