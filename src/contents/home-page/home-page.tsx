import * as motion from "motion/react-client";

import { ContentWrapper } from "@/components";
import { About, Clients, Intro, Skills, Socials } from "./components";

function HomePage() {
	return (
		<>
			<Intro />
			<ContentWrapper>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="mb-8"
				>
					<About />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="mb-8"
				>
					<Socials />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="mb-8"
				>
					<Clients />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="mb-8"
				>
					<Skills />
				</motion.div>
			</ContentWrapper>
		</>
	);
}

export { HomePage };
