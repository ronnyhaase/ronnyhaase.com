import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

import { ContentWrapper } from "@/components";

function PrivacyPolicyPage() {
	return (
		<ContentWrapper className="grow">
			<Link className="inline-flex items-center font-bold" href="/">
				<ChevronLeftIcon />
				<span>Home</span>
			</Link>
			<div className="content mt-2">
				<h1>Privacy Policy</h1>

				<p>
					This website complies with the EU General Data Protection
					Regulation (GDPR) and the German Federal Data Protection Act
					(BDSG).
				</p>

				<h2>1. Controller</h2>
				<p>
					Ronny Haase
					<br />
					Kolonnenstr. 8
					<br />
					10827 Berlin
					<br />
					Germany
					<br />
					<a href="mailto:ronnyhaase@duck.com">ronnyhaase@duck.com</a>
					<br />
				</p>

				<h2>2. Data Collected</h2>
				<p>
					When visiting this website, the following anonymized data
					may be collected and stored in server logs for 24 hours:
				</p>
				<ul>
					<li>Time of server request</li>
					<li>Browser type and version</li>
					<li>Operating system</li>
					<li>Referrer URL</li>
					<li>Country (derived from IP address)</li>
					<li>Visited paths</li>
				</ul>
				<p>
					This data is also aggregated and processed via Vercel
					Analytics to understand website usage and performance. No
					personal profiling or individual tracking is possible nor
					performed.
				</p>

				<h2>3. Cookies</h2>
				<p>
					The website uses only one essential cookie to store the
					user’s selected display mode (light, dark, or system). No
					tracking or additional cookies are set.
				</p>

				<h2>4. User Rights</h2>
				<p>
					You have the right to access, correct, delete, or restrict
					processing of your data, as well as data portability under
					Articles 15–20 GDPR. You also have the right to lodge a
					complaint with a supervisory authority.
				</p>

				<h2>5. Contact</h2>
				<p>
					For any privacy-related inquiries, please contact the
					controller at the address above.
				</p>
			</div>
		</ContentWrapper>
	);
}

export { PrivacyPolicyPage };
