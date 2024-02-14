import { RxDashboard } from "react-icons/rx";
import { LuUser } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GrNotification, GrUserManager } from "react-icons/gr";
import { RiNotificationBadgeFill } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation().pathname;
  const navitem = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Profile",
      icon: <LuUser />,
      link: "/dashboard/profile",
    },
    {
      name: "Message",
      icon: <FaRegMessage />,
      link: "/dashboard/message",
    },
    {
      name: "Enrolled Courses",
      icon: <FaRegBookmark />,
      link: "/dashboard/enrolled-courses",
    },

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
      name: "RecentCourses",
      icon: <FaRegBookmark />,
      link: "/dashboard/recent-courses",
    },
    {
      name: "AdminQuize",
      icon: <MdQuiz />,
      link: "/dashboard/admin-quiz",
    },
  ];
  return (
    <div className=" pt-[20px] pr-[30px] pb-[30px] pl-[30px] shadow-lg rounded-[10px] bg-bgPrimary/10">
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
          {navitem.map((item, i) => (
            <li
              className={`pb-[10px] pt-[10px] border-b-[1px] w-[100%] relative list-none text-[16px] border-bgPrimary/70 flex  items-center gap-1 hover:text-rgbFrom/100 transition-all duration-300 ease-in-out pl-2 ${
                location === item.link ? "text-rgbFrom/90" : "text-textPrimary"
              }`}
              key={i}
            >
              {item.icon}
              <Link
                to={item.link}
                className=" flex items-center gap-4 px-[10px]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ------nav item */}
    </div>
  );
};

export default Sidebar;
