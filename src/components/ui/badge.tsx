import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("hover_effect inline-flex items-center rounded-full lg:px-4 lg:py-2 py-1 px-3  text-sm transition-colors capitalize", {
	variants: {
		variant: {
			default: "border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80 font-semibold",
			free: "bg-blue-500/20 hover:bg-blue-600/20 text-blue-500 font-semibold",
			paid: "bg-yellow-500/20 hover:bg-yellow-600/20 text-yellow-600 font-semibold",
			active_deal: "bg-green-500/20 hover:bg-green-600/20 text-green-600 font-semibold",
			freemium: "bg-sky-500/20 hover:bg-sky-600/20 text-sky-500 font-semibold",
			free_trail: "bg-orange-500/20 hover:bg-orange-600/20 text-orange-500 font-semibold",
			outline: "border-[1.5px] border-neutral-800 font-medium text-neutral-800 hover:bg-neutral-300/80",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
