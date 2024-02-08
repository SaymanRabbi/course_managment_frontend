import { Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import Banner from "../Components/DashboardBanner/Banner";
import Sidebar from "../Components/DashboardSideBar/Sidebar";

const Dashboard = () => {
  return (
    <Container className=" pt-[130px] xl:!px-[60px] px-[30px]">
      <Banner />
      {/* main part include sidebar and content */}
      <div className=" grid grid-cols-12 p-4 mt-3 gap-8">
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
