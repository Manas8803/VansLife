import { Link, useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	return (
		<div className="Error-Container">
			<h1>Error !</h1>
			<h3>Message : "{error.message}"</h3>
			<pre>Error Code : {error?.status}</pre>
			<Link to={"/"}>Return to Home</Link>
		</div>
	);
}
