import { Route, Routes } from "react-router-dom";
import { Cart, Home, Products } from "../pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="cart" element={<Cart />} />
		</Routes>
	);
};
