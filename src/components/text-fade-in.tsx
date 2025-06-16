"use client";

import * as motion from "motion/react-client";
import { useId } from "react";

function TextFadeIn({ text }: { text: string }) {
	const id = useId();

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.03,
			},
		},
	};

	const child = {
		hidden: { opacity: 0, scale: 1.5 },
		show: { opacity: 1, scale: 1 },
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			onAnimationComplete={() => {
				setTimeout(() => {
					window.document
						.querySelector("main")!
						.scrollIntoView({ behavior: "smooth" });
				}, 1500);
			}}
		>
			{text.split("").map((char, index) =>
				char.charCodeAt(0) !== 32 && char.charCodeAt(0) !== 10 ? (
					<motion.span
						key={`${id}-${index}`}
						className="inline-block"
						variants={child}
					>
						{char}
					</motion.span>
				) : (
					<span key={`${id}-${index}`}>{char}</span>
				),
			)}
		</motion.div>
	);
}

export { TextFadeIn };
