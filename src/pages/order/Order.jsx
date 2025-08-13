import { useLocation } from "react-router-dom";
import { OrderError } from "./components/OrderError";
import { OrderSuccess } from "./components/OrderSuccess";
import { useTitle } from "../../hooks/useTitle";

export const Order = () => {

	useTitle("Order Status");

	const { state } = useLocation();

	return <main>{state.status ? <OrderSuccess data={state.data} /> : <OrderError />}</main>;
};
