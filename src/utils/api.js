async function api(url, method) {
	try {
		const response = await fetch(`http://localhost:8080/${url}`, {
			method: method,
			"Content-Type": "application/json",
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default api;
