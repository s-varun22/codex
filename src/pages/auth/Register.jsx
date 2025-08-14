import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { setAuthData } from "../../store/authSlice";
import { register } from "../../services/authService";

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useTitle("Register - Codex");

	const name = useRef();
	const email = useRef();
	const password = useRef();

	const handleRegister = async (event) => {
		event.preventDefault();

		try {
			const authDetail = {
				name: name.current.value,
				email: email.current.value,
				password: password.current.value,
			};

			const data = await register(authDetail);

			if (data.accessToken) {
				dispatch(setAuthData({ token: data.accessToken, userId: data.user.id }));
				navigate("/products");
			} else {
				toast.error(data, { closeButton: true, position: "bottom-center" });
			}
		} catch (error) {
			toast.error(error.message, { closeButton: true, position: "bottom-center" });
		}
	};

	return (
		<main>
			<section>
				<p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
					Register
				</p>
			</section>
			<form onSubmit={handleRegister}>
				<div className="mb-6">
					<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Name
					</label>
					<input
						type="name"
						id="name"
						ref={name}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						placeholder="Full Name"
						required
						autoComplete="off"
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Email
					</label>
					<input
						type="email"
						id="email"
						ref={email}
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						placeholder="Email Address"
						required
						autoComplete="off"
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Password
					</label>
					<input
						type="password"
						id="password"
						ref={password}
						placeholder="••••••••"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required
						minLength="7"
					/>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Register
				</button>
			</form>
		</main>
	);
};
