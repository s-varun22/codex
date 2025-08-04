import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="bg-white shadow dark:bg-gray-800">
			<div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2025{" "}
					<Link to="/" className="hover:underline">
						Codex
					</Link>
					. All Rights Reserved.
				</span>
				<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
					<Link
						to="https://www.linkedin.com/in/varuns22/"
						target="_blank"
						rel="noreferrer"
						className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<i className="bi bi-linkedin"></i>
						<span className="sr-only">LinkedIn</span>
					</Link>
					<Link
						to="https://x.com/varun2208"
						target="_blank"
						rel="noreferrer"
						className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<i className="bi bi-twitter-x"></i>
						<span className="sr-only">X</span>
					</Link>
					<Link
						to="https://github.com/s-varun22"
						target="_blank"
						rel="noreferrer"
						className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<i className="bi bi-github"></i>
						<span className="sr-only">GitHub</span>
					</Link>
				</div>
			</div>
		</footer>
	);
};
