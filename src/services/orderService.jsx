import { getToken } from "../store/authSlice";
import { store } from "../store/store";

export async function createOrder(cartItems, amount, user) {
	const token = getToken(store.getState());

	const order = {
		orderItems: cartItems,
		amount: amount,
		quantity: cartItems.length,
		user: {
			name: user.name,
			email: user.email,
			id: user.id,
		},
	};
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
		body: JSON.stringify(order),
	};
	const response = await fetch("http://localhost:8000/660/orders", requestOptions);
	if (!response.ok) {
		throw { message: response.statusText, status: response.status };
	}
	const data = await response.json();
	return data;
}
