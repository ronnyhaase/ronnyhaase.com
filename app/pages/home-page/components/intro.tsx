const Intro = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
	<div {...rest}>
		<div className="flex flex-col md:flex-row gap-4 mb-2">
			<img
				className="size-32 mx-auto rounded-full"
				src="/ronny.jpg"
				alt="Ronny Haase"
			/>
			<div className="flex-grow flex flex-col justify-center text-xl">
				<h1 className="font-bold">Hi, I'm Ronny! 👋</h1>
				<h2 className="">
					I'm passionate freelance Full-Stack Software Engineer and
					-Architect with over 20 years of experience.
				</h2>
			</div>
		</div>
		<div>
			<p>
				I craft effective end-to-end solutions, can also handle hosting
				and monitoring, and offer ongoing support.
			</p>
			<p>
				Even better — I love teaming up with passionate people to bring
				great projects to life!
			</p>
			<p>
				I'm also available for consulting, training and public speaking.
			</p>
		</div>
	</div>
);

export { Intro };
