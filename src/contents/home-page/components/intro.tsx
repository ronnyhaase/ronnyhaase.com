const Intro = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
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
		<div>
			<p>
				I build end-to-end web solutions, can manage hosting, monitoring
				and provide ongoing support.
			</p>
			<p>
				I’m also great at jumping into teams, adding momentum, and
				helping projects move forward.
			</p>
			<p>
				I'm also available for consulting, training, and speaking
				engagements.
			</p>
		</div>
	</div>
);

export { Intro };
