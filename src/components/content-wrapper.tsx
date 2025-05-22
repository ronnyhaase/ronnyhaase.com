const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
	<main className="flex-grow p-4">
		<div className="max-w-4xl w-full mx-auto">{children}</div>
	</main>
);

export { ContentWrapper };
