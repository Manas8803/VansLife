import { redirect } from "react-router-dom";

async function getVans() {
	const res = await fetch("/api/vans/");
	if (!res.ok) {
		throw {
			message: "Failed to fetch vans",
			statusText: res.statusText,
			status: res.status,
		};
	}
	const data = await res.json();
	return data.vans;
}

async function getVan(id) {
	const res = await fetch(`/api/vans/${id}`);
	const data = await res.json();
	return data.vans;
}

async function getHostVans() {
	const res = await fetch(`/api/vans`);
	const data = await res.json();
	return data.vans;
}

async function getHostVan(id) {
	const res = await fetch(`/api/host/vans/${id}`);
	const data = await res.json();
	console.log(data);
	return data.vans[0];
}

async function loginUser(creds) {
	const res = await fetch("/api/login", {
		method: "post",
		body: JSON.stringify(creds),
	});
	const data = await res.json();

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}

	return data;
}

export { getVan, getVans, getHostVan, getHostVans, loginUser };
