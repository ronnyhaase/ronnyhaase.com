import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import * as motion from "motion/react-client";

const Socials = () => (
	<>
		<div className="text-center">
			<p className="text-lg font-semibold">
				Let’s connect and create something amazing together!
			</p>
			<div className="inline-flex gap-2 mt-4">
				<motion.a
					href="mailto:ronnyhaase@duck.com"
					target="_blank"
					className="Button"
					whileFocus={{ scale: 0.9, rotate: -15 }}
					whileHover={{ scale: 0.9, rotate: -15 }}
					whileTap={{ scale: 0.9, rotate: -15 }}
				>
					<MailIcon size={48} />
				</motion.a>
				<motion.a
					href="https://x.com/ronnyhaase"
					target="_blank"
					className="Button"
					whileHover={{ scale: 1.1, rotate: 15 }}
					whileFocus={{ scale: 1.1, rotate: 15 }}
					whileTap={{ scale: 1.1, rotate: 15 }}
				>
					<TwitterIcon size={48} />
				</motion.a>
				<motion.a
					href="https://linkedin.com/in/ronnyhaase"
					target="_blank"
					className="Button"
					whileHover={{ scale: 1.2 }}
					whileFocus={{ scale: 1.2 }}
					whileTap={{ scale: 1.2 }}
				>
					<LinkedinIcon size={48} />
				</motion.a>
				<motion.a
					href="https://github.com/ronnyhaase"
					target="_blank"
					className="Button"
					whileHover={{ scale: 1.1, rotate: 90 }}
					whileFocus={{ scale: 1.1, rotate: 90 }}
					whileTap={{ scale: 1.1, rotate: 90 }}
				>
					<GithubIcon size={48} />
				</motion.a>
			</div>
		</div>
	</>
);

export { Socials };
