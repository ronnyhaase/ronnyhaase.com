import { clsx } from "clsx";
import { ArrowDownIcon } from "lucide-react";
import * as motion from "motion/react-client";

import { TextFadeIn } from "@/components";

function Intro() {
	return (
		<div
			className={clsx(
				"Intro w-full min-h-full flex flex-col items-center justify-center",
				"text-gray-700 dark:text-gray-300 text-2xl sm:text-4xl lg:text-6xl xl:text-8xl whitespace-pre-wrap",
			)}
		>
			<TextFadeIn text={"Great ideas\nNeed great execution."} />
			<motion.div
				className="mt-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, -16, 0] }}
				transition={{
					opacity: {
						delay: 1,
					},
					y: {
						duration: 1,
						repeat: Infinity,
						repeatType: "loop",
						ease: "easeInOut",
					},
				}}
			>
				<ArrowDownIcon size={64} />
			</motion.div>
		</div>
	);
}

export { Intro };
