const About = () => (
	<>
		<div className="flex flex-col md:flex-row gap-4 mb-2">
			<img
				className="size-32 mx-auto rounded-full"
				src="/ronny.png"
				alt="Ronny Haase"
			/>
			<div className="flex-grow flex flex-col justify-center text-xl">
				<h1 className="font-bold">Hi, I'm Ronny! 👋</h1>
				<h2 className="">
					I'm a passionate Full-Stack Software Engineer and -Architect
					with 20+ years of experience.
				</h2>
			</div>
		</div>
		<div className="my-4">
			<p className="text-center">
				I currently work full-time, and now and then take on freelance
				side projects. I build end-to-end web solutions, including
				websites, web apps, and mobile apps. My strengths lie in joining
				teams to add momentum, help projects advance, and share
				experience through consulting, training, speaking engagements,
				and open-source work.
			</p>
		</div>
	</>
);

export { About };
