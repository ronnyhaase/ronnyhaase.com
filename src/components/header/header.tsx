import { ColorSchemaSwitch } from "@/components";

const Header = () => {
	return (
		<header className="fixed w-full flex justify-center pt-1">
			<ColorSchemaSwitch />
		</header>
	);
};

export { Header };
