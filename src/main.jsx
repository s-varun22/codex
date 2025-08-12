import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { ScrollToTop } from "./components";
import "./index.css";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ScrollToTop />
				<ToastContainer position="top-center"/>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
