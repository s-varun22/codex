import { Route, Routes } from "react-router-dom";
import { Cart, Home, ProductDetail, Products } from "../pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="cart" element={<Cart />} />
			<Route path="products/:id" element={<ProductDetail />} />
		</Routes>
	);
};
