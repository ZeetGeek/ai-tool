interface userProfileProps {
	id: number;
	name: string;
	navigate: string | null;
}

export const userProfile = [
	{
		id: 0,
		name: "See Profile",
		href: "/see-profile",
	},
	{
		id: 1,
		name: "Uploaded Tools",
		href: "/upload-tools",
	},
	{
		id: 2,
		name: "Saved Tools",
		href: "/saved-tools",
	},
	{
		id: 3,
		name: "Tools Collection",
		href: "/tools-collection",
	},
];
