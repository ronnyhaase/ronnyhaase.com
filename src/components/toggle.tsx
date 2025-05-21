"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "@/utils";

const toggleVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-md transition-colors" +
		"text-sm font-medium hover:bg-white hover:text-gray-950 " +
		"disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 dark:data-[state=on]:bg-gray-200 data-[state=on]:text-gray-950 " +
		"[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				// outline:
				// 	"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
			},
			size: {
				default: "h-9 px-2 min-w-9",
				sm: "h-8 px-1.5 min-w-8",
				lg: "h-10 px-2.5 min-w-10",
			},
			gap: {
				default: "gap-2",
				none: "gap-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			gap: "default",
		},
	},
);

const Toggle = React.forwardRef<
	React.ComponentRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({ variant, size, className }))}
		{...props}
	/>
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
