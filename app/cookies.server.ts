import { createCookie } from "react-router";

const colorSchema = createCookie("color-schema", {
	maxAge: 2_592_000, // 30 days
	path: "/",
	sameSite: "lax",
});

export { colorSchema };
