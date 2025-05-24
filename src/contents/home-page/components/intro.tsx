import { TextFadeIn } from "@/components";
import { clsx } from "clsx";

function Intro() {
	return (
		<div
			className={clsx(
				"Intro w-full min-h-full flex flex-col items-center justify-center",
				"text-gray-700 dark:text-gray-300 text-2xl sm:text-4xl lg:text-6xl xl:text-8xl whitespace-pre-wrap",
			)}
		>
			<TextFadeIn
				text={"Great ideas\nmean nothing\nwithout great execution."}
			/>
		</div>
	);
}

export { Intro };
