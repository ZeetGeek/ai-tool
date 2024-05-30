import Image from "next/image";
import menuIcon from "@/images/icons/menu-icon.svg";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const HeaderSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<div className="hover_effect rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
					<Image
						src={menuIcon}
						height={36}
						width={36}
						alt="menu icon"
						className="static_dark_icon"
					/>
				</div>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default HeaderSidebar;
