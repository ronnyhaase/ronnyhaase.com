import { Clients, Intro, Skills, Socials } from "./components";

function HomePage() {
	return (
		<>
			<Intro className="mb-4" />
			<Socials className="mb-8" />
			<Clients className="mb-8" />
			<Skills />
		</>
	);
}

export { HomePage };
