import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
	const { id } = useParams();
	const [vanDetail, setVanDetail] = useState(null);
	useEffect(() => {
		async function fetchVan() {
			const data = await fetch(`/api/vans/${id}`);
			const { vans } = await data.json(); //& Used await two times here.
			setVanDetail(vans);
		}
		fetchVan();
	}, [id]);
	return (
		<div className="VanDetails-container">
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
