import { useLocation } from "react-router-dom";
import { OrderError } from "./components/OrderError";
import { OrderSuccess } from "./components/OrderSuccess";

export const Order = () => {
	const { state } = useLocation();

	return <main>{state.status ? <OrderSuccess data={state.data} /> : <OrderError />}</main>;
};
