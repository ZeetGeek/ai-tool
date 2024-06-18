"use client";
import Title from "./title";
import Des from "./description";
import { NavArrowDown } from "iconoir-react";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

interface AccordionProps {
	children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => (
	<AccordionPrimitive.Root
		type="single"
		defaultValue="item-1"
	>
		{children}
	</AccordionPrimitive.Root>
);

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("faq_box rounded-2xl", className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn("faq_title mx-4 flex flex-1 items-center justify-between border-b border-transparent py-4 transition-all lg:mx-6 lg:py-6 [&[data-state=open]>svg]:rotate-180", className)}
			{...props}
		>
			<Title
				size="h6"
				className="text-start leading-normal sm:leading-none"
			>
				{children}
			</Title>
			<NavArrowDown className="accordion_icon h-8 w-8 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden px-4 pt-4 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down lg:px-6"
		{...props}
	>
		<div className={cn("pb-4 pt-0", className)}>
			<Des size="md">{children}</Des>
		</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
