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
				<Badge
					key={`skill-${skill}`}
					className="active:bg-pink-500 hover:bg-pink-500 active:text-white hover:text-white transition-colors duration-150"
				>
					{skill}
				</Badge>
			))}
		</div>
	</>
);

export { Skills };
