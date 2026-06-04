"use client";

import cookies from "js-cookie";
import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components";

type ColorSchema = "dark" | "light" | "system";

const getColorSchemaSetting = (): ColorSchema => {
	const colorSchemaSetting = cookies.get("color-schema");

	if (colorSchemaSetting === "dark" || colorSchemaSetting === "light") {
		return colorSchemaSetting;
	}

	return "system";
};

const updateColorSchema = () => {
	const colorSchemaSetting = cookies.get("color-schema");
	document.documentElement.classList.toggle(
		"dark",
		colorSchemaSetting === "dark" ||
			(!colorSchemaSetting &&
				window.matchMedia("(prefers-color-scheme: dark)").matches),
	);
};

const ColorSchemaSwitch = ({}) => {
	const [colorSchema, setColorSchema] = useState<ColorSchema>("system");
	const [hasResolvedColorSchema, setHasResolvedColorSchema] = useState(false);

	useLayoutEffect(() => {
		setColorSchema(getColorSchemaSetting());
		setHasResolvedColorSchema(true);
		updateColorSchema();

		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)",
		);
		darkModeMediaQuery.addEventListener("change", updateColorSchema);

		return () =>
			darkModeMediaQuery.removeEventListener("change", updateColorSchema);
	}, []);

	useLayoutEffect(() => {
		if (!hasResolvedColorSchema) return;

		switch (colorSchema) {
			case "dark":
				cookies.set("color-schema", "dark");
				break;
			case "light":
				cookies.set("color-schema", "light");
				break;
			case "system":
				cookies.remove("color-schema");
				break;
		}
		updateColorSchema();
	}, [colorSchema, hasResolvedColorSchema]);

	return (
		<ToggleGroup
			className="p-2 rounded-lg bg-gray-50 dark:bg-gray-950"
			type="single"
			value={colorSchema}
			onValueChange={(value) => {
				if (value) setColorSchema(value as ColorSchema);
			}}
		>
			<ToggleGroupItem value="light" aria-label="Toggle light mode">
				<SunIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="system" aria-label="Toggle system mode">
				<MonitorCogIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="dark" aria-label="Toggle dark mode">
				<MoonIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
};

export { ColorSchemaSwitch };
