"use client";
import Logo from "./logo";
import "@/style/header.scss";
import HeaderSidebar from "./header/header-sidebar";
import NavLinks from "./header/nav-links";
import UserProfile from "./header/user-profile";
import AuthBtns from "./header/auth-btns";

interface HeaderProps {
	isLogged?: boolean;
}

const Header = ({ isLogged }: HeaderProps) => {
	return (
		<>
			<header>
				<div className="container">
					<div className="flex items-center justify-between">
						{/* sidebar & logo */}
						<div className="inline-flex items-center gap-2 lg:gap-5">
							{/* sidebar */}
							<HeaderSidebar />
							{/* logo */}
							<Logo href="/" />
						</div>

						{/* nav links */}
						<div className="hidden lg:block">
							<NavLinks />
						</div>

						{isLogged ? (
							<>
								{/* user profile */}
								<UserProfile />
							</>
						) : (
							<>
								{/* auth buttons */}
								<AuthBtns />
							</>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
