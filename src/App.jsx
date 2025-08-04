import { Footer, Header } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
	return (
		<div className=" bg-white dark:bg-gray-900">
			<Header />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export default App;
