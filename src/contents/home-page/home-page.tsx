import { Clients, Intro, Skills, Socials } from "./components";

function HomePage() {
	return (
		<main className="max-w-4xl w-full mx-auto py-4 px-4">
			<Intro className="mb-4" />
			<Socials className="mb-8" />
			<Clients className="mb-8" />
			<Skills />
		</main>
	);
}

export { HomePage };
