import Link from "next/link";
import { Button } from "../ui/button";

const AuthBtns = () => {
	return (
		<div className="flex items-center">
			<Button
				name="sign in btn"
				className="pl-0"
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
			<Button
				name="sign up btn"
				size="md"
				asChild
			>
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
