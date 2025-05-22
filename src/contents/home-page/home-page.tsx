import { ContentWrapper } from "@/components";
import { About, Clients, Skills, Socials } from "./components";

function HomePage() {
	return (
		<ContentWrapper>
			<About className="mb-8" />
			<Socials className="mb-8" />
			<Clients className="mb-8" />
			<Skills />
		</ContentWrapper>
	);
}

export { HomePage };
