import { ContentWrapper } from "@/components";
import { About, Clients, Intro, Skills, Socials } from "./components";

function HomePage() {
	return (
		<>
			<Intro />
			<ContentWrapper className="min-h-full">
				<About className="mb-8" />
				<Socials className="mb-8" />
				<Clients className="mb-8" />
				<Skills />
			</ContentWrapper>
		</>
	);
}

export { HomePage };
