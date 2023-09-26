import { useEffect, useState } from "react";
import VanCard from "../../Utility/VanCard";
import { Link, NavLink, useSearchParams } from "react-router-dom";

export default function Vans() {
	//* For Filtering Vans :
	const [searchParams, setSearchParams] = useSearchParams();

	//? Note : If there are mutliple search params for the same key then the first value is taken.

	//* All Vans Data :
	const [vans, setVans] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const data = await fetch("/api/vans");
			const { vans } = await data.json();
			setVans(vans);
		}
		fetchData();
	}, []);

	const displayVans = searchParams.get("type")
		? vans.filter((van) => van.type.toLowerCase() === searchParams.get("type"))
		: vans;

	return (
		<div className="Vans-container">
			<h3>Explore Our Van Options</h3>
			<div className="Vans-share_button_link">
				<div className="category_buttons">
					<button
						className="van-type simple"
						onClick={() => setSearchParams("type=simple")}
					>
						Simple
					</button>
					<button
						className="van-type luxury"
						onClick={() => setSearchParams("type=luxury")}
					>
						Luxury
					</button>
					<button
						className="van-type rugged"
						onClick={() => setSearchParams("type=rugged")}
					>
						Rugged
					</button>
				</div>
				<div className="clear_filter_button">
					<button onClick={() => setSearchParams("")}>Clear filters</button>
				</div>
			</div>
			<div className="Van-list">
				{displayVans.map((van) => {
					return (
						<Link
							to={`./${van.id}`}
							style={{ textDecoration: "none", color: "black",padding:"0" }}
							key={van.id}
						>
							<VanCard
								name={van.name}
								price={van.price}
								type={van.type}
								img={van.imageUrl}
								id={van.id}
								key={van.id}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
