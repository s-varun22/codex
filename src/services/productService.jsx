export const getProducts = async (searchTerm) => {
	const url = searchTerm ? `http://localhost:8000/444/products?name_like=${searchTerm}` : "http://localhost:8000/444/products";

	const response = await fetch(url);

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return response.json();
};

export const getProduct = async (id) => {
	const response = await fetch(`http://localhost:8000/444/products/${id}`);

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return await response.json();
};

export const getFeaturedProducts = async () => {
	const response = await fetch("http://localhost:8000/444/featured_products");

	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}

	return await response.json();
};
