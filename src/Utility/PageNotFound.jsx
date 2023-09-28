import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div className="Page-not-found">
			<div className="title-container">
				<h1>Sorry, the page you were looking for was not found.</h1>
			</div>
			<Link to="..">Return to Home</Link>
		</div>
	);
}
