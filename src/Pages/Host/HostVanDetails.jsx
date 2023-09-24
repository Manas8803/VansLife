import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function HostVanDetail() {
	const { id } = useParams();
	const [vanDetail, setVanDetail] = useState(null);
	useEffect(() => {
		async function fetchVan() {
			const data = await fetch(`/api/host/vans/${id}`);
			const { vans } = await data.json(); //& Used await two times here.
			setVanDetail(vans[0]);
		}
		fetchVan();
	}, [id]);
	
	return (
		<section>
			{vanDetail ? (
				<div className="host-van-detail-layout-container">
					<div className="host-van-detail">
						<img src={vanDetail.imageUrl} />
						<div className="host-van-detail-info-text">
							<i className={`van-type van-type-${vanDetail.type}`}>
								{vanDetail.type}
							</i>
							<h3>{vanDetail.name}</h3>
							<h4>${vanDetail.price}/day</h4>
						</div>
					</div>
				</div>
			) : (
				<h1>LOADING.....</h1>
			)}
		</section>
	);
}
