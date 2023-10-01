import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export function loginLoader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export function LoginForm() {
	const message = useLoaderData();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("handleSubmit");
		//& Api Call
	}

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && (
				<h3 style={{ padding: "0", marginTop: "0" }} className="red">
					{message}
				</h3>
			)}
			<form className="login-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					onChange={handleChange}
					value={formData.email}
					placeholder="Email address"
				/>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					value={formData.password}
					placeholder="Password"
					autoComplete="off"
				/>
				<button>Log in</button>
			</form>
		</div>
	);
}
