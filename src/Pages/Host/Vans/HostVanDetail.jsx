import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

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

	//* If we had just did ".." here(see below in the Link component) then it would have taken us to the parent route of this component in which it is wrapped around, i.e., '/host' not 'host/vans', and parent route is the route in which this component is wrapped around, not as per the url or path.

	//* So to achieve this functionality we use the relative prop of the Link component and set it to path, and not our route heirarchy.(default value is route of this prop)
	return (
		<section>
			<Link
				to=".."
				relative="path"
				style={{ color: "#161616", paddingTop: "2rem" }}
			>
				&larr; Back to all Vans
			</Link>
			{vanDetail ? (
				<>
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
					<nav className="host-van-detail-nav">
						<NavLink
							to="."
							className={({ isActive }) => (isActive ? "selected" : null)}
							end
						>
							Details
						</NavLink>
						<NavLink
							to="./pricing"
							className={({ isActive }) => (isActive ? "selected" : null)}
						>
							Pricing
						</NavLink>
						<NavLink
							to="./photos"
							className={({ isActive }) => (isActive ? "selected" : null)}
						>
							Photos
						</NavLink>
					</nav>
						<Outlet context={vanDetail} />
				</>
			) : (
				<h1>LOADING.....</h1>
			)}
		</section>
	);
}
