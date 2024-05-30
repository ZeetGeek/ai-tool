import Link from "next/link";
import { Button } from "../ui/button";

const AuthBtns = () => {
	return (
		<div className="flex items-center">
			<Button
				variant="link"
				asChild
			>
				<Link
					href="/sign-in"
					title="Sign in account"
				>
					Sign In
				</Link>
			</Button>
			<Button asChild>
				<Link
					href="/sign-up"
					title="Create a account"
				>
					Sign up
				</Link>
			</Button>
		</div>
	);
};

export default AuthBtns;
