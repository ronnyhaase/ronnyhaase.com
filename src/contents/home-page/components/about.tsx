const About = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
	<div {...rest}>
		<div className="flex flex-col md:flex-row gap-4 mb-2">
			<img
				className="size-32 mx-auto rounded-full"
				src="/ronny.png"
				alt="Ronny Haase"
			/>
			<div className="flex-grow flex flex-col justify-center text-xl">
				<h1 className="font-bold">Hi, I'm Ronny! 👋</h1>
				<h2 className="">
					I'm passionate freelance Full-Stack Software Engineer and
					-Architect with 20+ years of experience.
				</h2>
			</div>
		</div>
		<div className="my-4">
			<p className="text-center">
				I build end-to-end web solutions, including websites, web apps,
				and mobile apps. I also manage hosting and provide ongoing
				support. My strengths lie in joining teams to add momentum and
				help projects advance, along with offering consulting, training,
				and speaking engagements.
			</p>
		</div>
	</div>
);

export { About };
