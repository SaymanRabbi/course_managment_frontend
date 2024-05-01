import { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { PiStudentBold } from "react-icons/pi";
import { useUserStore } from "../../Store/UserStore";
import DashboardCard from "./DashboardCard";
import DashboardTittle from "./DashboardTittle";
import NotFound from "../NotFound/NotFound";
interface Data {
  name: string;
  value: number;
  icon: JSX.Element;
}
const DashboardContent = () => {
  const [search, setSearch] = useState("");
  const { user, assignments, leaderBoard, getLeaderBoard } = useUserStore(
    (state) => state
  );
  const [filteredUsers, setFilteredUsers] = useState(leaderBoard);
  const data: Data[] = [
    {
      name: "Enrolled Courses",
      value: 1,
      icon: <FaAward />,
    },
    {
      name: "Quiz Attemped",
      value: user?.quizs?.length || 0,
      icon: <PiStudentBold />,
    },
    {
      name: "Submit Assignment",
      value: assignments?.length || 0,
      icon: <FcReading />,
    },
  ];
  useEffect(() => {
    getLeaderBoard();
  }, []);
  // search function
  useEffect(() => {
    if (search === "") {
      setFilteredUsers(leaderBoard);
    } else {
      setFilteredUsers(
        leaderBoard?.filter((item: any) =>
          item?.name?.toLowerCase()?.includes(search?.toLowerCase())
        )
      );
    }
  }, [search, leaderBoard]);

  // search function
  return (
    <div>
      <DashboardCard title="Overview">
        <div className=" grid grid-cols-12 gap-5">
          {data.map((item, index) => (
            <div
              className=" bg-bgPrimary/15 py-[30px] px-[30px] mb-[20px] rounded-[20px] shadow-md xl:col-span-4 lg:col-span-5 col-span-12 border-[1px] border-bgPrimary/50"
              key={index}
            >
              <div className=" mb-0 flex items-center">
                {/* ------img----- */}
                <div className=" mr-[16px]">
                  <span className=" text-[65px] text-error/85">
                    {item.icon}
                  </span>
                </div>
                {/* ------img----- */}
                {/* ------content----- */}
                <div>
                  <div className=" font-[700] text-[34px] leading-relaxed text-textPrimary">
                    <span>{item.value}</span>
                  </div>
                  <p className=" font-[500] text-[16px] leading-relaxed text-textPrimary">
                    {item.name}
                  </p>
                </div>
                {/* ------content----- */}
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
      <div className="shadow-lg bg-bgPrimary/10 mb-[30px] px-[40px] py-[50px] rounded-[10px]">
        <DashboardTittle>
          <div className=" flex justify-between w-[100%] items-center">
            <h4 className=" font-[700] text-textPrimary text-[20px]">
              Leaderboard
            </h4>
            {/* search func */}
            <input
              type="text"
              placeholder="Search by name"
              className=" w-[300px] h-[40px] border border-[#ccc] rounded-md px-4 py-1  outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* search func */}
          </div>
        </DashboardTittle>

        <div className="relative overflow-x-auto max-h-[300px] min-h-[300px]">
          <table className="w-full text-sm text-left ">
            <thead className=" font-bold text-textPrimary text-[16px] sticky top-0 bg-[#101130]">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.length === 0 ? (
                <NotFound title="Not Found Anything"></NotFound>
              ) : (
                filteredUsers?.map((item: any, index: any) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">{item?.name}</td>
                    <td className="px-6 py-4">
                      <img
                        src={item?.image}
                        className=" w-[55px] h-[55px] rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{item?.totalScore}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* -------dashboard content---- */}
    </div>
  );
};

export default DashboardContent;
