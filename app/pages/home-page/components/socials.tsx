import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

import { Button } from "~/components";

const Socials = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
	<div {...rest}>
		<div className="text-center">
			<p className="text-lg">
				Let’s connect and create something incredible together!
			</p>
			<div className="inline-flex gap-2">
				<a href="mailto:ronnyhaase@duck.com" target="_blank">
					<Button className="cursor-pointer">
						<MailIcon size={32} />
					</Button>
				</a>
				<a href="https://x.com/ronnyhaase" target="_blank">
					<Button className="cursor-pointer">
						<TwitterIcon size={32} />
					</Button>
				</a>
				<a href="https://linkedin.com/in/ronnyhaase" target="_blank">
					<Button className="cursor-pointer">
						<LinkedinIcon size={32} />
					</Button>
				</a>
				<a href="https://github.com/ronnyhaase">
					<Button className="cursor-pointer">
						<GithubIcon size={32} />
					</Button>
				</a>
			</div>
		</div>
	</div>
);

export { Socials };
