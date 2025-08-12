import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DropdownLoggedIn, DropdownLoggedOut, Search } from "..";
import logo from "../../assets/logo.png";
import { applyDarkMode, getInitialDarkMode } from "../../utils/Theme";

export const Header = () => {
	const [darkMode, setDarkMode] = useState(getInitialDarkMode);
	const [searchVisible, setSearchVisible] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const token = sessionStorage.getItem("token");

	const cartListLength = useSelector((state) => state.cartState.cartList.length);

	useEffect(() => {
		applyDarkMode(darkMode);
	}, [darkMode]);

	return (
		<header className="sticky top-0 z-50 w-full">
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<Link to="/" className="flex items-center">
						<img src={logo} className="mr-3 h-10" alt="Flowbite Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codex</span>
					</Link>
					<div className="flex items-center relative">
						<span
							onClick={() => setDarkMode(!darkMode)}
							type="button"
							className="cursor-pointer text-xl text-gray-700 dark:text-white"
							aria-label="Toggle Dark Mode">
							{darkMode ? (
								<i className="bi bi-sun cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
							) : (
								<i className="bi bi-moon-fill cursor-pointer text-lg text-gray-700 dark:text-white mr-5" />
							)}
						</span>
						<span
							onClick={() => setSearchVisible(!searchVisible)}
							className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
						<Link to="/cart" className="text-gray-700 dark:text-white mr-5">
							<span className="text-2xl bi bi-cart-fill relative">
								<span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
									{cartListLength}
								</span>
							</span>
						</Link>
						<span
							onClick={() => setDropdown(!dropdown)}
							className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
						{dropdown &&
							(token ? (
								<DropdownLoggedIn setDropdown={setDropdown} />
							) : (
								<DropdownLoggedOut setDropdown={setDropdown} />
							))}
					</div>
				</div>
			</nav>

			<nav className="bg-gray-50 dark:bg-gray-700">
				<div className="max-w-screen-xl px-4 py-3 mx-auto">
					<div className="flex items-center">
						<ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
							<li>
								<Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="Home Page">
									Home
								</Link>
							</li>
							<li>
								<Link to="/products" className="text-gray-900 dark:text-white hover:underline">
									Products
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{searchVisible && <Search setSearchVisible={setSearchVisible} />}
		</header>
	);
};
