export const login = async (authDetail) => {
	const requestOptions = {
		method: "POST",
		headers: { "content-Type": "application/json" },
		body: JSON.stringify(authDetail),
	};

	const response = await fetch(`${import.meta.env.VITE_HOST_URL}login`, requestOptions);

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

	const response = await fetch(`${import.meta.env.VITE_HOST_URL}register`, requestOptions);

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return await response.json();
};
