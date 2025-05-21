import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { cookies as getCookies } from "next/headers";
import { Header } from "@/components";
import Link from "next/link";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
	title: "Ronny Haase • Freelance Frontend / Full-Stack Software Engineer &; Software Architect",
	description:
		"Ronny Haase • Frontend / Full-Stack Software Engineer & -Architect with 20+ years of experience building highly scalable web-based solutions.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const colorSchema = (await getCookies()).get("color-schema");
	const isDarkMode = colorSchema?.value === "dark";

	return (
		<html lang="en" className={isDarkMode ? "dark" : ""}>
			<body className={`${poppins.variable} antialiased flex flex-col`}>
				<Header />
				<main className="flex-grow p-4">
					<div className="max-w-4xl w-full mx-auto">{children}</div>
				</main>
				<footer className="p-4 bg-gray-100 dark:bg-gray-900">
					<div className="max-w-4xl w-full mx-auto">
						Copyright &copy; Ronny Haase, 2011 -{" "}
						{new Date().getFullYear()}
						<br />
						<Link href="/imprint">Imprint</Link>
						&nbsp;&bull;&nbsp;
						<Link href="/privacy">Privacy Policy</Link>
						<p className="mt-1 text-sm">
							The{" "}
							<a href="https://github.com/ronnyhaase/ronnyhaase.com">
								code of this website
							</a>{" "}
							is open source under GPL v3 or later.
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
