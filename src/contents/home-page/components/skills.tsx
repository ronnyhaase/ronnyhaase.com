import { Badge } from "@/components";

const skills = [
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
	"React.js",
	"Next.js",
	"TailwindCSS",
	"Motion",
	"MaterialUI",
	"Mantine",
	"NodeJS",
	"Express.js",
	"Nest.js",
	"ElysiaJS",
	"Python",
	"FastAPI",
	"Docker",
	"Containerization",
	"CI / CD",
	"Cloud Computing",
	"Serverless",
	"Microservices",
	"SQL",
	"Redis",
	"MongoDB",
	"Kafka",
	"RabbitMQ",
	"ZeroMQ",
	"Web3",
	"Solana",
	"...",
];

const Skills = () => (
	<>
		<h2 className="mb-2 text-xl font-semibold">Super Powers</h2>
		<div className="flex flex-wrap gap-1">
			{skills.map((skill) => (
				<Badge key={`skill-${skill}`}>{skill}</Badge>
			))}
		</div>
	</>
);

export { Skills };
