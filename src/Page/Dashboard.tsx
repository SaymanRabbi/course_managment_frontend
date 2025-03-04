import { Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import Banner from "../Components/DashboardBanner/Banner";
import Sidebar from "../Components/DashboardSideBar/Sidebar";
import { useUserStore } from "../Store/UserStore";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, assignments, getNotification } = useUserStore((state) => state);
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <Container className=" pt-[130px] xl:!px-[60px] md:px-[30px] px-[10px]">
      <Banner
        name={user?.name || "User"}
        ernolledCourses={user?.courses?.length || 1}
        certificate={user?.quizs?.length || 0}
        assignment={assignments?.length || 0}
        buttonTitle="Enroll New Course"
      />
      {/* main part include sidebar and content */}
      <div className=" grid grid-cols-12 p-4 mt-3 md:gap-8 gap-4">
        <div className=" col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Outlet />
        </div>
      </div>
      {/* main part include sidebar and content */}
    </Container>
  );
};

export default Dashboard;
