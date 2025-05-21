import { clsx } from "clsx";

const Button = ({
	children,
	className,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={clsx(
				"p-2 rounded bg-gray-950 hover:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-300 text-white dark:text-gray-800",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

export { Button };
