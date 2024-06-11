import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"hover_effect text-base inline-flex items-center justify-center capitalize whitespace-nowrap rounded-md font-medium ring-offset-white  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 leading-[180%] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 cursor-pointer",
	{
		variants: {
			variant: {
				default: "bg-primary-600 text-white hover:bg-primary-500",
				destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
				outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
				secondary: "bg-secondary-600 hover:bg-secondary-500 text-neutral-800",
				ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 p-1 rounded-sm",
				link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
			},
			size: {
				default: "lg:px-8 lg:py-3 px-7 py-2 rounded-lg font-medium",
				md: "lg:px-8 lg:py-3 px-7 py-2 rounded-lg  font-medium",
				sm: "lg:py-2 lg:px-6 py-[6px] px-5 rounded-[4px]",
				lg: "lg:px-10 lg:py-[18px] px-8 py-4 rounded-xl",
				icon: "lg:h-10 lg:w-10 h-8 w-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = "Button";

export { Button, buttonVariants };
