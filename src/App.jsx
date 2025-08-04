import { useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer, Header } from "./components";

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
