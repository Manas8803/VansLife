import { useOutletContext } from "react-router-dom";

export default function Photos() {
	const van = useOutletContext();
	console.log(van);
	return <>{van ? <h1>Photos Goes Here</h1> : <h1>Loading...</h1>}</>;
}
