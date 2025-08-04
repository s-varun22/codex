import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Jumbotron } from "./components/Jumbotron";
import { Testimonials } from "./components/Testimonials";

export const Home = () => {
	return (
		<main>
			<Jumbotron />
			<FeaturedProducts />
			<Testimonials />
			<Faq />
		</main>
	);
};
