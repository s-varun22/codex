import { Route, Routes } from "react-router-dom";
import { Cart, Dashboard, ErrorPage, Home, Login, Order, ProductDetail, Products, Register } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<Products />} />
			<Route path="products/:id" element={<ProductDetail />} />
			<Route
				path="cart"
				element={
					<ProtectedRoutes>
						<Cart />
					</ProtectedRoutes>
				}
			/>
			<Route
				path="order-summary"
				element={
					<ProtectedRoutes>
						<Order />
					</ProtectedRoutes>
				}
			/>
			<Route
				path="dashboard"
				element={
					<ProtectedRoutes>
						<Dashboard />
					</ProtectedRoutes>
				}
			/>

			{/* Authentication Routes */}
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};
