export const getInitialDarkMode = () => {
	const stored = localStorage.getItem("darkMode");
	if (stored !== null) return stored === "true";
	return true; // default to true instead of checking system preference
};

/**
 * Apply dark mode to the <html> element and persist it.
 * @param {boolean} isDark - Whether dark mode should be enabled.
 */
export const applyDarkMode = (isDark) => {
	localStorage.setItem("darkMode", isDark);
	document.documentElement.classList.toggle("dark", isDark);
};