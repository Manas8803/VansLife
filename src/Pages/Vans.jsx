import { useEffect, useState } from "react";
import VanCard from "../Utility/VanCard";

export default function Vans() {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => {
				setVans(data.vans);
				console.log(data.vans);
			});
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
						<VanCard
							name={van.name}
							price={van.price}
							type={van.type}
							img={van.imageUrl}
							id={van.id}
							key={van.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
