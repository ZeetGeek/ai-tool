import ProfileBgCover from '@/images/profile-bg-cover.gif';

const ProfileInfo = () => {
	return (
		<>
			<section className="profile_info">
				<div className="container">
					<div className="profile_wp">
						{/* background cover image */}
						<div
							className="profile_bg_cover_img"
							style={{ backgroundImage: `url(${ProfileBgCover.src})` }}
						></div>

						{/* profile options */}
						<div className="relative z-10 -mt-[85px] flex flex-col items-center gap-10 ps-0 lg:flex-row lg:items-end lg:ps-12">
							<div className="profile_box"></div>
							<div className="row w-full flex-1">
								<div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
									<div className="tools_info_box p-10"></div>
								</div>
								<div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
									<div className="tools_info_box p-10"></div>
								</div>
								<div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
									<div className="tools_info_box p-10"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProfileInfo;
