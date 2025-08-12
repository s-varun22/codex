import { Route, Routes } from "react-router-dom";
import { Cart, ErrorPage, Home, Login, ProductDetail, Products, Register } from "../pages";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="cart" element={<Cart />} />
			<Route path="products/:id" element={<ProductDetail />} />

			{/* Authentication Routes */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};
