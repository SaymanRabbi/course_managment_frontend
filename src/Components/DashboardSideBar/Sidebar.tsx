import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../../Store/UserStore";
import { SideBaritem } from "../../dummyData/DummyData";
import useAuth from "../../hooks/useAuth";
import HotToast from "../../utils/HotToast";
const Sidebar = () => {
  const { setAuth } = useAuth();
  const navigation = useNavigate();
  const [toast] = useState({
    message: "",
    type: null as "success" | "error" | "warning" | "loading" | null,
    duration: 0,
  });
  const location = useLocation().pathname;
  const { logout, user, Notification } = useUserStore((state) => state);

  const logoutFunc = () => {
    logout();
    Cookies.remove("user");
    setAuth({ user: false, token: "", role: "" });
    Cookies.remove("auth");
    Cookies.remove("token");
    navigation("/login");
  };
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }
  return (
    <div className=" pt-[20px] pr-[30px] pb-[30px] pl-[15px] shadow-lg rounded-[10px] bg-bgPrimary/10">
      <div className=" mb-[10px] mt-[20px]">
        {/* ---tittle---- */}
        <h2 className=" text-[14px] font-[500] uppercase mb-0 px-[10px] pt-[10px] pb-[7px] text-textPrimary tracking-wider">
          {greeting} {user?.name}
        </h2>
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
            ) : item.name === "Notifications" ? (
              <li
                className={`pb-[10px] pt-[10px] border-b-[1px] w-[100%]  list-none text-[16px] border-bgPrimary/70 flex  items-center gap-1 hover:text-rgbFrom/100 transition-all relative duration-300 ease-in-out pl-2 ${
                  location === item.link
                    ? "text-rgbFrom/90"
                    : "text-textPrimary"
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
                <span className=" absolute bg-[#BE185D] w-[25px] h-[25px] rounded-full flex items-center justify-center right-[0%] text-white">
                  {Notification?.length}
                </span>
              </li>
            ) : item.admin && user?.role === "admin" ? (
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
            ) : item.student && user?.role === "student" ? (
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
            ) : item.admin && item.student ? (
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
            ) : (
              ""
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
