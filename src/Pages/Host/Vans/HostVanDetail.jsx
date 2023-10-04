import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVan } from "../../../api";
import { requireAuth } from "../../../Auth";

export async function HVDloader({ request, params }) {
	await requireAuth(request);
	return getHostVan(params.id);
}

export function HostVanDetail() {
	const vanDetail = useLoaderData();
	console.log(vanDetail);

	//* If we had just did ".." here(see below in the Link component) then it would have taken us to the parent route of this component in which it is wrapped around, i.e., '/host' not 'host/vans', and parent route is the route in which this component is wrapped around, not as per the url or path.

	//* So to achieve this functionality we use the relative prop of the Link component and set it to path, and not our route heirarchy.(default value is route of this prop)
	return (
		<section>
			<Link
				to=".."
				relative="path"
				style={{
					color: "#4e4e4e",
					alignSelf: "flex-start",
					padding: "1rem 0rem",
					textUnderlineOffset: "3px",
					backgroundColor: "#0000	",
					fontWeight: "400",
					textDecoration: "underline",
					fontFamily: "Arial",
					letterSpacing: "1.3px",
				}}
			>
				&larr; Back to all Vans
			</Link>
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
		</section>
	);
}
