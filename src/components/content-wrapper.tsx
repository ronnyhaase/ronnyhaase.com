import { clsx } from "clsx";

const ContentWrapper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<main
		className={clsx(
			"flex-grow p-4 pt-14 bg-gray-50 dark:bg-gray-950",
			className,
		)}
	>
		<div className="max-w-4xl w-full mx-auto">{children}</div>
	</main>
);

export { ContentWrapper };
