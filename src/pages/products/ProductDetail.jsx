import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../../components";

export const ProductDetail = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch(`http://localhost:8000/products/${id}`);
			const data = await response.json();
			setProduct(data);
		};
		fetchProduct();
	}, [id]);

	return (
		<main>
			<section>
				<h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
				<p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
				<div className="flex flex-wrap justify-around">
					<div className="max-w-xl my-3">
						<img className="rounded" src={product.poster} alt={product.name} />
					</div>
					<div className="max-w-xl my-3">
						<p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
							<span className="mr-1">€</span>
							<span className="">{product.price}</span>
						</p>
						<p className="my-3">
							<span>
								<Rating rating={product.rating} />
							</span>
						</p>
						<p className="my-4 select-none">
							{product.best_seller && (
								<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
									BEST SELLER
								</span>
							)}
							{product.in_stock && (
								<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
									INSTOCK
								</span>
							)}
							{!product.in_stock && (
								<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
									OUT OF STOCK
								</span>
							)}
							<span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
								{product.size} MB
							</span>
						</p>
						<p className="my-3"></p>
						<p className="text-lg text-gray-900 dark:text-slate-200">{product.long_description}</p>
					</div>
				</div>
			</section>
		</main>
	);
};
