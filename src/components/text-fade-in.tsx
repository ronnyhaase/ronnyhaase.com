"use client";

import * as motion from "motion/react-client";
import { useEffect, useId, useRef } from "react";

function TextFadeIn({ text }: { text: string }) {
	const id = useId();
	const mainY = useRef(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const mainEl = window.document.querySelector("main");
			if (mainEl) mainY.current = mainEl.getBoundingClientRect().y;
		}
	}, []);

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
				setTimeout(
					() =>
						window.scrollTo({
							behavior: "smooth",
							top: mainY.current,
						}),
					1000,
				);
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
