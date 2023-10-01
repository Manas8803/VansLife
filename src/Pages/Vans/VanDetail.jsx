import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../Auth";

export async function VDloader(obj) {
	await requireAuth(); //* Redirecting to Auth js.
	return getVan(obj.params.id);
}

export function VanDetail() {
	const vanDetail = useLoaderData();
	const location = useLocation();
	const {
		state: { search },
	} = location;

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
			<>
				<div className="VanDetails-img_container">
					<img src={vanDetail.imageUrl} alt="" />
				</div>
				<div className="VanDetails-data_container">
					<div className="VanDetails-type vcard-type">
						<i className={`${vanDetail.type}`}>{vanDetail.type}</i>
					</div>
					<div className="VanDetails-text">
						<h1>{vanDetail.name}</h1>
						<h3>
							${vanDetail.price}
							<span className="VanDetails-perday">/day</span>
						</h3>
						<p>{vanDetail.description}</p>
					</div>
					<div className="VanDetails-button_container">
						<button>Rent this van</button>
					</div>
				</div>
			</>
		</div>
	);
}
