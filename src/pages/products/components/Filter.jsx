import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clear,
	bestSeller as setBestSeller,
	inStock as setInStock,
	ratings as setRatings,
	sortBy as setSortBy,
} from "../../../store/filterSlice";

export const Filter = ({ setShow }) => {
	const dispatch = useDispatch();
	const { inStockOnly, bestSellerOnly, sortBy, ratings } = useSelector((state) => state.filterState);

	// Unique suffix per component instance
	const groupId = useId();

	return (
		<section className="p-4 w-full h-fit lg:sticky lg:top-24 overflow-y-auto">
			<div className="flex justify-between items-center mb-4">
				<h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Filters</h5>
				<button
					onClick={() => setShow(false)}
					className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
					aria-label="Close filter">
					<i className="bi bi-x-lg" />
				</button>
			</div>

			<hr className="border-gray-300 dark:border-gray-600 mb-4" />

			<div className="space-y-6 text-slate-700 dark:text-slate-100">
				{/* Sort By */}
				<div>
					<p className="font-semibold mb-2">Sort by</p>

					<label className="flex items-center space-x-2 mb-1" htmlFor={`sort-lth-${groupId}`}>
						<input
							id={`sort-lth-${groupId}`}
							type="radio"
							name={`price-sort-${groupId}`}
							value="lowtohigh"
							checked={sortBy === "lowtohigh"}
							onChange={(e) => dispatch(setSortBy(e.target.value))}
						/>
						<span>Price - Low to High</span>
					</label>

					<label className="flex items-center space-x-2" htmlFor={`sort-htl-${groupId}`}>
						<input
							id={`sort-htl-${groupId}`}
							type="radio"
							name={`price-sort-${groupId}`}
							value="hightolow"
							checked={sortBy === "hightolow"}
							onChange={(e) => dispatch(setSortBy(e.target.value))}
						/>
						<span>Price - High to Low</span>
					</label>
				</div>

				{/* Rating */}
				<div>
					<p className="font-semibold mb-2">Rating</p>
					{["4", "3", "2", "1"].map((star) => {
						const value = `${star}`;
						const id = `rating-${star}-${groupId}`;
						return (
							<label key={star} className="flex items-center space-x-2 mb-1" htmlFor={id}>
								<input
									id={id}
									type="radio"
									name={`rating-sort-${groupId}`}
									value={value}
									checked={ratings === value}
									onChange={(e) => dispatch(setRatings(e.target.value))}
								/>
								<span>{star} Stars &amp; Above</span>
							</label>
						);
					})}
				</div>

				{/* Other Filters */}
				<div>
					<p className="font-semibold mb-2">Other Filters</p>
					<label className="flex items-center space-x-2 mb-1">
						<input type="checkbox" checked={bestSellerOnly} onChange={() => dispatch(setBestSeller(!bestSellerOnly))} />
						<span>Best Seller Only</span>
					</label>
					<label className="flex items-center space-x-2">
						<input type="checkbox" checked={inStockOnly} onChange={() => dispatch(setInStock(!inStockOnly))} />
						<span>In Stock Only</span>
					</label>
				</div>

				{/* Clear Button */}
				<div className="pt-2">
					<button
						onClick={() => dispatch(clear())}
						className="w-full py-2 border rounded-lg text-sm font-medium dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
						Clear Filters
					</button>
				</div>
			</div>
		</section>
	);
};
