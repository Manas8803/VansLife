import {
	Form,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";
import { useEffect } from "react";

export function loginLoader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
	const formData = await request.formData();
	const path = new URL(request.url).searchParams.get("redirectTo") || "/vans";
	const email = formData.get("email");
	const password = formData.get("password");
	try {
		await loginUser({ email, password });
	} catch (err) {
		return err.message;
	}
	localStorage.setItem("loggedIn", true);
	return redirect(`${path}`);
}

export function LoginForm() {
	const message = useLoaderData();
	const errMessage = useActionData();

	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("loggedIn")) navigate("/host");
	}, []);
	const status = useNavigation().state;

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && (
				<h3 style={{ padding: "0", marginTop: "0" }} className="red">
					{message}
				</h3>
			)}
			{errMessage && (
				<h3 className="red" style={{ padding: "0", marginTop: "0" }}>
					{errMessage}
				</h3>
			)}
			<Form className="login-form" method="post">
				<input type="text" name="email" placeholder="Email address" />
				<input
					type="password"
					name="password"
					placeholder="Password"
					autoComplete="off"
				/>
				<button
					disabled={status === "submitting"}
					style={{ backgroundColor: status === "submitting" ? "grey" : "" }}
				>
					{status === "submitting" ? "Logging in" : "Log in"}
				</button>
			</Form>
		</div>
	);
}
