import type { Route } from "./+types/home";
import { HomePage } from "~/pages";

function meta({}: Route.MetaArgs) {
	return [
		{
			title: "Ronny Haase • Freelance Frontend / Full-Stack Software Engineer &; Software Architect",
		},
		{
			name: "description",
			content:
				"Hi, I'm Ronny! I am a Frontend / Full-Stack Software Engineer & -Architect with 20+ years of experience building highly scalable web-based solutions.",
		},
	];
}

function HomeRoute() {
	return <HomePage />;
}

export { HomeRoute as default, meta };
