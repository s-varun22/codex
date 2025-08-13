import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getToken } from "../store/authSlice";

export const ProtectedRoutes = ({ children }) => {
	const token = useSelector(getToken);

	return token ? children : <Navigate to="/login" />;
};
