import { Link, useLocation } from "react-router-dom";

import { MdQuiz } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GrNotification, GrUserManager } from "react-icons/gr";
import { RiNotificationBadgeFill } from "react-icons/ri";

import { SideBaritem } from "../../dummyData/DummyData";
import { useUserStore } from "../../Store/UserStore";
import { useState } from "react";
import HotToast from "../../utils/HotToast";


const Sidebar = () => {
  const [toast, setToast] = useState({
    message: "",
    type: null as "success" | "error" | "warning" | "loading" | null,
    duration: 0,
  });
  const location = useLocation().pathname;
  const { logout } = useUserStore((state) => state);


    {
      name: "Reviews",
      icon: <FaRegStar />,
      link: "/dashboard/reviews",
    },
    {
      name: "My Quiz Attempts",
      icon: <MdQuiz />,
      link: "/dashboard/quiz",
    },
    {
      name: "My Assignments",
      icon: <MdAssignment />,
      link: "/dashboard/assignments",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
      link: "/settings",
    },
    {
      name: "Logout",
      icon: <FiLogOut />,
      link: "/logout",
    },
    {
      name: "AdminDashboard",
      icon: <RxDashboard />,
      link: "/dashboard/admin-dashboard",
    },
    {
      name: "AdminProfile",
      icon: <LuUser />,
      link: "/dashboard/admin-profile",
    },
    {
      name: "AdminMessage",
      icon: <FaRegMessage />,
      link: "/dashboard/message",
    },
    {
      name: "AdminCourses",
      icon: <FaRegBookmark />,
      link: "/dashboard/admin-courses",
    },
    {
      name: "PopularInstructors",
      icon: <GrUserManager />,
      link: "/dashboard/popular-instructor",
    },
    {
      name: "NoticeBoard",
      icon: <RiNotificationBadgeFill />,
      link: "/dashboard/notice-board",
    },
    {
      name: "Notifications",
      icon: <GrNotification />,
      link: "/dashboard/notifications",
    },
    {
      name: "Manage-Role",
      icon: <GrNotification />,
      link: "/dashboard/manageRole",
    },
  ];

  const logoutFunc = () => {
    logout();

    setToast({
      message: "You have been logged out",
      type: "success",
      duration: 2000,
    });
  };

  return (
    <div className=" pt-[20px] pr-[30px] pb-[30px] pl-[15px] shadow-lg rounded-[10px] bg-bgPrimary/10">
      <div className=" mb-[10px] mt-[20px]">
        {/* ---tittle---- */}
        <h6 className=" text-[14px] font-[500] uppercase mb-0 px-[10px] pt-[10px] pb-[7px] text-textPrimary tracking-wider">
          Welcome Sayman Rabbi
        </h6>
        {/* ---tittle---- */}
      </div>
      {/* ------nav item */}
      <div>
        <ul>
          {SideBaritem.map((item, i) =>
            item.name === "Logout" ? (
              <li
                className={`pb-[10px] pt-[10px] border-b-[1px] w-[100%] relative list-none text-[16px] border-bgPrimary/70 flex  items-center gap-1 hover:text-rgbFrom/100 transition-all duration-300 ease-in-out pl-2 ${
                  location === item.link
                    ? "text-rgbFrom/90"
                    : "text-textPrimary"
                }`}
                key={i}
                onClick={() => logoutFunc()}
              >
                {item.icon}
                <Link
                  to={item.link}
                  className=" flex items-center gap-4 px-[10px]"
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li
                className={`pb-[10px] pt-[10px] border-b-[1px] w-[100%] relative list-none text-[16px] border-bgPrimary/70 flex  items-center gap-1 hover:text-rgbFrom/100 transition-all duration-300 ease-in-out pl-2 ${
                  location === item.link
                    ? "text-rgbFrom/90"
                    : "text-textPrimary"
                }`}
                key={i}
                onClick={logout}
              >
                {item.icon}
                <Link
                  to={item.link}
                  className=" flex items-center gap-4 px-[10px]"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* ------nav item */}
      {toast.type && (
        <HotToast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
        />
      )}
    </div>
  );
};

export default Sidebar;
