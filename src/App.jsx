import { useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer, Header } from "./components";

function App() {
	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
		</>
	);
}

export default App;
