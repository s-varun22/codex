import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { Filter } from "./components/Filter";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../store/filterSlice";
import { getProducts } from "../../services";
import { toast } from "react-toastify";

export const Products = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const search = useLocation().search;
	const searchTerm = new URLSearchParams(search).get("query");

	useTitle(searchTerm ? `Search Results - ${searchTerm}` : "Explore eBooks");

	const { allProducts, inStockOnly, bestSellerOnly, sortBy, ratings } = useSelector((state) => state.filterState);

	const filteredProducts = allProducts
		.filter((product) => {
			if (inStockOnly && !product.in_stock) return false;
			if (bestSellerOnly && !product.best_seller) return false;
			if (ratings) {
				const minRating = parseInt(ratings.charAt(0)); // "4STARSABOVE" => 4
				if (product.rating < minRating) return false;
			}
			return true;
		})
		.sort((a, b) => {
			if (sortBy === "lowtohigh") return a.price - b.price;
			if (sortBy === "hightolow") return b.price - a.price;
			return 0;
		});

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getProducts(searchTerm);
				dispatch(products(data));
			} catch (error) {
				toast.error(error.message, { closeButton: true, position: "bottom-center" });
			}
		};
		fetchProducts();
	}, []);

	return (
		<main className="flex flex-col lg:flex-row gap-6 px-4 py-6 relative">
			{/* Sidebar (desktop only) */}
			{show && (
				<div className="">
					<Filter setShow={setShow} />
				</div>
			)}

			{/* Drawer (mobile only) */}
			{show && (
				<>
					<div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={() => setShow(!show)} />
					<div className="fixed top-0 left-0 w-72 h-full bg-white dark:bg-gray-800 z-50 shadow-lg transition-transform transform translate-x-0 lg:hidden">
						<Filter setShow={setShow} />
					</div>
				</>
			)}
			<section className="flex-1">
				<div className="my-5 flex justify-between">
					<span className="text-2xl font-semibold dark:text-slate-100 mb-5">
						All eBooks ({filteredProducts.length})
					</span>
					<span>
						<button
							onClick={() => setShow(!show)}
							className=" text-gray-700 dark:text-white p-2 rounded-md border border-gray-300 dark:border-gray-600 mb-4">
							<i className="bi bi-funnel-fill" />
						</button>
					</span>
				</div>

				<div className="flex flex-wrap justify-center lg:flex-row">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</main>
	);
};
