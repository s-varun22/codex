import { getToken, getUserId } from "../store/authSlice";
import { store } from "../store/store";

export async function getUser() {
	const token = getToken(store.getState());
	const userId = getUserId(store.getState());
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
	};
	const response = await fetch(`http://localhost:8000/600/users/${userId}`, requestOptions);
	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}
	const data = await response.json();
	return data;
}
