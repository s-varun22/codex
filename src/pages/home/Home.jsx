import { useTitle } from "../../hooks/useTitle.jsx";
import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Jumbotron } from "./components/Jumbotron";
import { Testimonials } from "./components/Testimonials";

export const Home = () => {
	useTitle("Codex - Home");
	return (
		<main>
			<Jumbotron />
			<FeaturedProducts />
			<Testimonials />
			<Faq />
		</main>
	);
};
