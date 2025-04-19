import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "~/app.css";
import { colorSchema } from "~/cookies.server";
import { Header } from "~/components";

async function loader({ request }: Route.LoaderArgs) {
	const cookieHeader = request.headers.get("Cookie");
	console.log(cookieHeader);
	const cookie = (await colorSchema.parse(cookieHeader)) || {};
	console.log(cookie);
	return { colorSchema: cookie.colorSchema };
}

const links: Route.LinksFunction = () => [];

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}

function App({ loaderData }: Route.ComponentProps) {
	const { colorSchema } = loaderData;
	console.log(loaderData);
	return (
		<html lang="en" prefix="og: https://ogp.me/ns#" className={colorSchema}>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export { ErrorBoundary, Layout, loader, links };
export default App;
