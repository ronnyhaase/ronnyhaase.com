import * as motion from "motion/react-client";

import { ContentWrapper } from "@/components";
import { About, Clients, Intro, Skills, Socials } from "./components";
import { Variants } from "motion/react";

function HomePage() {
	const container: Variants = {};

	const section: Variants = {
		hidden: { opacity: 0, y: 16 },
		show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
	};

	return (
		<>
			<Intro />
			<ContentWrapper>
				<motion.div variants={container}>
					<motion.div
						variants={section}
						initial="hidden"
						whileInView="show"
						viewport={{ amount: 0.5, once: true }}
						className="mb-8"
					>
						<About />
					</motion.div>
					<motion.div
						variants={section}
						initial="hidden"
						whileInView="show"
						viewport={{ amount: 0.75, once: true }}
						className="mb-8"
					>
						<Socials />
					</motion.div>
					<motion.div
						variants={section}
						initial="hidden"
						whileInView="show"
						viewport={{ amount: 0.5, once: true }}
						className="mb-8"
					>
						<Clients />
					</motion.div>
					<motion.div
						variants={section}
						initial="hidden"
						whileInView="show"
						viewport={{ amount: 0.5, once: true }}
						className="mb-8"
					>
						<Skills />
					</motion.div>
				</motion.div>
			</ContentWrapper>
		</>
	);
}

export { HomePage };
