import { clsx } from "clsx";

const Badge = ({
	className,
	children,
	...rest
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		{...rest}
		className={clsx(
			className,
			"inline-flex px-4 py-1 rounded-lg bg-gray-200 dark:bg-gray-700",
		)}
	>
		{children}
	</div>
);

export { Badge };
