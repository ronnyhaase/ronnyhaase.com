import * as motion from "motion/react-client";
import { useId } from "react";

function TextFadeIn({ text }: { text: string }) {
	const id = useId();

	return (
		<div>
			{text.split("").map((char, index) =>
				char.charCodeAt(0) !== 32 && char.charCodeAt(0) !== 10 ? (
					<motion.span
						key={`${id}-${index}`}
						className="inline-block"
						initial={{ opacity: 0, scale: 1.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: index * 0.03,
						}}
					>
						{char}
					</motion.span>
				) : (
					<span key={`${id}-${index}`}>{char}</span>
				),
			)}
		</div>
	);
}

export { TextFadeIn };
