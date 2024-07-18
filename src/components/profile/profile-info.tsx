import ProfileBgCover from '@/images/profile-bg-cover.gif';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Upload, Bookmark, ViewGrid, Mail, Edit } from 'iconoir-react';
import { socialLinks } from '@/data/social-links';
import profileImage from '@/images/user-profile.jpg';
import Image from 'next/image';
import Des from '../ui/description';

const ProfileInfo = () => {
     interface userToolsInfoProps {
          title: string;
          icon: ReactNode;
          totalTools: number;
     }

     const userToolsInfo: userToolsInfoProps[] = [
          {
               title: 'Uploaded Tools',
               icon: <Upload className="tools_info_icon" />,
               totalTools: 20,
          },
          {
               title: 'Saved Tools',
               icon: <Bookmark className="tools_info_icon" />,
               totalTools: 86,
          },
          {
               title: 'Collection',
               icon: <ViewGrid className="tools_info_icon" />,
               totalTools: 5,
          },
     ];

     return (
          <>
               <section className="profile_info">
                    <div className="container">
                         <div className="profile_wp">
                              {/* background cover image */}
                              <div
                                   className="profile_bg_cover_img"
                                   style={{
                                        backgroundImage: `url(${ProfileBgCover.src})`,
                                   }}
                              ></div>

                              {/* profile options */}
                              <div className="profile_option relative z-10 -mt-[85px] flex flex-col items-center ps-0 lg:flex-row lg:items-end lg:ps-12">
                                   <div className="profile_box p-6">
                                        <div className="mb-6 flex items-center gap-4">
                                             <div className="h-[100px] w-[100px] overflow-hidden rounded-[20px]">
                                                  {/* profile image */}
                                                  <Image
                                                       src={profileImage}
                                                       height={100}
                                                       width={100}
                                                       alt="profile image"
                                                  />
                                             </div>
                                             <div className="flex flex-col items-start">
                                                  <h5 className="h5_title mb-1">
                                                       Devon Lane!
                                                  </h5>
                                                  <div className="flex items-center gap-2">
                                                       <Mail className="text-sm text-neutral-500" />
                                                       <span className="text-base text-neutral-500">
                                                            devonlane@gmail.com
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        <Des
                                             size="lg"
                                             className="text-neutral-500"
                                        >
                                             🎨✨ Hey there! I'm Devon Lane, a
                                             passionate designer bringing
                                             creativity to life one pixel at a
                                             time. 🌈💡 Let's make magic! 💻🎨🚀
                                        </Des>
                                        <div className="mt-2 flex items-end justify-between">
                                             <div className="flex items-center space-x-[14px]">
                                                  {socialLinks.map((v, i) => (
                                                       <Link
                                                            key={i}
                                                            href={v.link}
                                                            title={v.title}
                                                       >
                                                            {v.icon}
                                                       </Link>
                                                  ))}
                                             </div>
                                             {/* edit btn */}
                                             <button className="hover_effect flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 hover:bg-secondary-400">
                                                  <Edit
                                                       height={24}
                                                       width={24}
                                                       strokeWidth={2}
                                                  />
                                             </button>
                                        </div>
                                   </div>
                                   <div className="row w-full flex-1">
                                        {userToolsInfo.map((item, index) => (
                                             <div
                                                  key={index}
                                                  className="tools_info_box_wp col-xxl-4 col-lg-6 col-md-4 col-sm-6 mx-auto"
                                             >
                                                  <div className="tools_info_box p-10">
                                                       <div className="mb-3 flex justify-between">
                                                            <span className="tools_into_box_title">
                                                                 {item.title}
                                                            </span>
                                                            {item.icon}
                                                       </div>
                                                       <h3 className="h3_title">
                                                            {item.totalTools}
                                                       </h3>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default ProfileInfo;
