import { useEffect, useState } from "react";
import VanCard from "../../Utility/VanCard";
import { Link } from "react-router-dom";

export default function Vans() {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const data = await fetch("/api/vans");
			const { vans } = await data.json();
			setVans(vans);
		}
		fetchData();
	}, []);

	return (
		<div className="Vans-container">
			<h3>Explore Our Van Options</h3>
			<div className="Vans-share_button_link">
				<div className="category_buttons">
					<button>Simple</button>
					<button>Luxury</button>
					<button>Rugged</button>
				</div>
				<div className="clear_filter_button">
					<button>Clear filters</button>
				</div>
			</div>
			<div className="Van-list">
				{vans.map((van) => {
					return (
						<Link
							to={`/vans/${van.id}`}
							style={{ textDecoration: "none", color: "black" }}
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
