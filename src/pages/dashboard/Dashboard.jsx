import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { EmptyDashboard } from "./components/EmptyDashboard";

export const Dashboard = () => {
	
	useTitle("My Dashboard");

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const data = await getUserOrders();
				setOrders(data);
			} catch (error) {
				toast.error(error.message, { closeButton: true, position: "bottom-center" });
			}
		};
		fetchOrders();
	}, []);

	return (
		<main>
			<section>
				<p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
					My Dashboard
				</p>
			</section>

			<section>{orders.length && orders.map((order) => <DashboardCard key={order.id} order={order} />)}</section>

			<section>{!orders.length && <EmptyDashboard />}</section>
		</main>
	);
};
