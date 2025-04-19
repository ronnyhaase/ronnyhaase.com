import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
	const updateTheme = () => {
		document.documentElement.classList.toggle(
			"dark",
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) &&
					window.matchMedia("(prefers-color-scheme: dark)").matches),
		);
	};

	return (
		<header>
			<button
				onClick={() => {
					localStorage.theme = "light";
					updateTheme();
				}}
			>
				<SunIcon />
			</button>
			<button
				onClick={() => {
					localStorage.removeItem("theme");
					updateTheme();
				}}
			>
				<MonitorCogIcon />
			</button>
			<button
				onClick={() => {
					localStorage.theme = "dark";
					updateTheme();
				}}
			>
				<MoonIcon />
			</button>
		</header>
	);
};

export { Header };
