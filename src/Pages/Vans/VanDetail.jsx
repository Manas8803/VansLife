import {
	Await,
	Link,
	defer,
	useLoaderData,
	useLocation,
} from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../Auth";
import { Suspense } from "react";

export async function VDloader(obj) {
	await requireAuth(obj.request); //* Redirecting to Auth js.
	return defer({ van: getVan(obj.params.id) });
}

export function VanDetail() {
	const vanPromise = useLoaderData();
	const location = useLocation();
	const {
		state: { search },
	} = location;

	function renderVan(van) {
		return (
			<>
				<div className="VanDetails-img_container">
					<img src={van.imageUrl} alt="" />
				</div>
				<div className="VanDetails-data_container">
					<div className="VanDetails-type vcard-type">
						<i className={`${van.type}`}>{van.type}</i>
					</div>
					<div className="VanDetails-text">
						<h1>{van.name}</h1>
						<h3>
							${van.price}
							<span className="VanDetails-perday">/day</span>
						</h3>
						<p>{van.description}</p>
					</div>
					<div className="VanDetails-button_container">
						<button>Rent this van</button>
					</div>
				</div>
			</>
		);
	}

	return (
		<div className="VanDetails-container">
			<Link
				to={`..?${search}`}
				relative="path"
				style={{
					color: "#4e4e4e",
					alignSelf: "flex-start",
					padding: "1rem 0rem",
					textUnderlineOffset: "0.2rem",
					backgroundColor: "#0000	",
					fontWeight: "400",
					textDecoration: "underline",
					fontFamily: "Arial",
					letterSpacing: "2px",
				}}
			>
				&larr; Back to all Vans
			</Link>
			<Suspense fallback={<Loader />}>
				<Await resolve={vanPromise.van}>{renderVan}</Await>
			</Suspense>
		</div>
	);
}

function Loader() {
	return (
		<div className="dot-container">
			<div className="dots"></div>
		</div>
	);
}
