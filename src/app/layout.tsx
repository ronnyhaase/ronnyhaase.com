import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { cookies as getCookies } from "next/headers";
import { Header } from "@/components";

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
			<body className={`${poppins.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
