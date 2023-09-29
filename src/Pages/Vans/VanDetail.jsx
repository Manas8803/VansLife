import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVan } from "../../api";
import { set } from "lodash";

export default function VanDetail() {
	//* Loading State :
	const [loading, setLoading] = useState(false);

	const { id } = useParams();
	const location = useLocation();
	const {
		state: { search },
	} = location;

	const [vanDetail, setVanDetail] = useState();
	useEffect(() => {
		async function fetchVan() {
			setLoading(true);
			const data = await getVan(id);
			setVanDetail(data);
			setLoading(false);
		}
		fetchVan();
	}, [id]);

	if (loading)
		return (
			<div className="Loader-container">
				<h1>Loading...</h1>
			</div>
		);
	if (!vanDetail) return <h1>Error 404 Not Found!!</h1>;

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
			{vanDetail ? (
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
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}
