import VanCard from "../../Utility/VanCard";
import {
	Await,
	Link,
	defer,
	useLoaderData,
	useSearchParams,
} from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../Auth";
import { Suspense } from "react";

export async function vansLoader({ request }) {
	await requireAuth(request);
	return defer({ vans: getVans() });
}

export function Vans() {
	//* For Filtering Vans :
	const [searchParams, setSearchParams] = useSearchParams();
	//? Note : If there are mutliple search params for the same key then the first value is taken.

	const vansPromise = useLoaderData();
	function setSeachFilter(key, value) {
		setSearchParams((prev) => {
			if (!value) prev.delete(key);
			else prev.set(key, value);
			return prev;
		});
	}

	function renderVans(vans) {
		const displayVans = searchParams.get("type")
			? vans.filter(
					(van) => van.type.toLowerCase() === searchParams.get("type")
			  )
			: vans;
		return (
			<>
				<div className="Vans-share_button_link">
					<div className="category_buttons">
						<button
							className={`van-type simple ${
								searchParams.get("type") === "simple" ? "selected" : ""
							}`}
							onClick={() => setSeachFilter("type", "simple")}
						>
							Simple
						</button>
						<button
							className={`van-type luxury ${
								searchParams.get("type") === "luxury" ? "selected" : ""
							}`}
							onClick={() => setSeachFilter("type", "luxury")}
						>
							Luxury
						</button>
						<button
							className={`van-type rugged ${
								searchParams.get("type") === "rugged" ? "selected" : ""
							}`}
							onClick={() => setSeachFilter("type", "rugged")}
						>
							Rugged
						</button>
					</div>
					<div className="clear_filter_button">
						{searchParams.get("type") && (
							<button onClick={() => setSeachFilter("type", null)}>
								Clear filters
							</button>
						)}
					</div>
				</div>
				<div className="Van-list">
					{displayVans.map((van) => {
						return (
							<Link
								to={`./${van.id}`}
								state={{ search: searchParams.toString() }}
								style={{
									textDecoration: "none",
									color: "black",
									padding: "0",
								}}
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
			</>
		);
	}

	return (
		<div className="Vans-container">
			<h3>Explore Our Van Options</h3>
			<Suspense fallback={<Loader />}>
				<Await resolve={vansPromise.vans}>{renderVans}</Await>
				{/* This function will be called when the component first loads by default*/}
			</Suspense>
		</div>
	);
}

function Loader() {
	return (
		<div className="spinner-container">
			<div className="spinner"></div>
		</div>
	);
}
