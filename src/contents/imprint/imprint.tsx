import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

import { ContentWrapper } from "@/components";

function ImprintPage() {
	return (
		<ContentWrapper>
			<Link className="inline-flex font-bold" href="/">
				<ChevronLeftIcon /> Home
			</Link>
			<div className="content mt-2">
				<h1>Imprint</h1>
				<p>Information according to § 5 TMG (German Telemedia Act)</p>

				<table>
					<tbody>
						<tr>
							<td>
								<strong>Name:</strong>
							</td>
							<td>Ronny Haase</td>
						</tr>
						<tr>
							<td>
								<strong>Address:</strong>
							</td>
							<td>Kolonnenstr. 8, 10827 Berlin, Germany</td>
						</tr>
						<tr>
							<td>
								<strong>Email:</strong>
							</td>
							<td>
								<a href="mailto:ronnyhaase@duck.com">
									ronnyhaase@duck.com
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<strong>VAT ID:</strong>
							</td>
							<td>DE453195041</td>
						</tr>
					</tbody>
				</table>

				<p>
					Responsible for content according to § 55 para. 2 RStV:
					<br />
					Ronny Haase
				</p>
			</div>
		</ContentWrapper>
	);
}

export { ImprintPage };
