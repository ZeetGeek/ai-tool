import { Search, KeyCommand } from "iconoir-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBox = () => {
	return (
		<>
			<div className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
				{/* search input */}
				<div className="search_box flex h-[60px] w-full max-w-[500px] items-center justify-between gap-3 rounded-xl bg-neutral-100 px-6 hover:bg-neutral-200/60">
					<div className="flex w-full flex-1 items-center gap-3">
						<Search className="icon_24 text-neutral-500" />
						<Input
							className="w-full flex-1 py-4 text-base font-medium text-neutral-800"
							type="text"
							placeholder="Search AI Tools..."
						/>
					</div>
					<div className="flex items-center">
						<KeyCommand
							height={16}
							width={16}
							className="stroke-[1.5px] text-neutral-500"
						/>{" "}
						<span className="text-md text-neutral-400">+K</span>{" "}
					</div>
				</div>

				{/* search button */}
				<Button
					size="lg"
					className="w-full sm:w-auto"
				>
					Search Tool
				</Button>
			</div>
		</>
	);
};

export default SearchBox;
