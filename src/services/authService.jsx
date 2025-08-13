export const login = async (authDetail) => {
	const requestOptions = {
		method: "POST",
		headers: { "content-Type": "application/json" },
		body: JSON.stringify(authDetail),
	};

	const response = await fetch("http://localhost:8000/login", requestOptions);

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return await response.json();
};

export const register = async (authDetail) => {
	const requestOptions = {
		method: "POST",
		headers: { "content-Type": "application/json" },
		body: JSON.stringify(authDetail),
	};

	const response = await fetch("http://localhost:8000/register", requestOptions);

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return await response.json();
};
