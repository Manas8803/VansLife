import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const data = await fetch("/api/vans");
			const { vans } = await data.json();
			setVans(vans);
		}
		fetchData();
	}, []);

	const Van = vans.map((van) => (
		<Link
			to={`./${van.id}`}
			key={van.id}
			className="host-van-link-wrapper"
		>
			<div className="host-van-single" key={van.id}>
				<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
				<div className="host-van-info">
					<h3>{van.name}</h3>
					<p>${van.price}/day</p>
				</div>
			</div>
		</Link>
	));
	return (
		<>
			<section>
				<h1 className="host-vans-title">Your listed vans</h1>
				<div className="host-vans-list">
					{vans.length > 0 ? <section>{Van}</section> : <h2>Loading...</h2>}
				</div>
			</section>
		</>
	);
}
