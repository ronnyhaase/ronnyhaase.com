"use client";

import * as motion from "motion/react-client";
import { useEffect, useId } from "react";

declare global {
	interface Window {
		didUserScroll?: boolean;
	}
}

function TextFadeIn({ text }: { text: string }) {
	const id = useId();

	useEffect(() => {
		const markUserScrolled = () => {
			window.didUserScroll = true;
		};

		window.didUserScroll ??= false;

		window.addEventListener("scroll", markUserScrolled, {
			once: true,
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", markUserScrolled);
		};
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
				setTimeout(() => {
					if (window.didUserScroll) {
						return;
					}

					window.document
						.querySelector("main")
						?.scrollIntoView({ behavior: "smooth" });
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
