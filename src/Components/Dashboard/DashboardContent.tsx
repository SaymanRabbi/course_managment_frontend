import DashboardTittle from "./DashboardTittle";
import { FaAward } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FcReading } from "react-icons/fc";
import { IoStar } from "react-icons/io5";
import { feedbackData } from "../../dummyData/DummyData";
import DashboardCard from "./DashboardCard";
interface Data {
  name: string;
  value: number;
  icon: JSX.Element;
}
const DashboardContent = () => {
  const data: Data[] = [
    {
      name: "Enrolled Courses",
      value: 27,
      icon: <FaAward />,
    },
    {
      name: "Active Courses",
      value: 8,
      icon: <PiStudentBold />,
    },
    {
      name: "Completed Courses",
      value: 12,
      icon: <FcReading />,
    },
  ];

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
                    <span>{item.value}</span>+
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
              Feedbacks
            </h4>
            <span className=" text-textPrimary font-[600]">See More ....</span>
          </div>
        </DashboardTittle>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left ">
            <thead className=" font-bold text-textPrimary text-[16px]">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  Course Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Enrolled
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item, index) => (
                <tr className=" text-textPrimary" key={index}>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.enrolled}</td>
                  <td className="px-6 py-4 flex gap-x-1 font-bold">
                    {[...Array(5)].map((_, i) => {
                      return (
                        <span key={i}>
                          {i < item.rating ? (
                            <IoStar className="text-rgbTo" />
                          ) : (
                            <IoStar className="text-textSecondary" />
                          )}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* -------dashboard content---- */}
    </div>
  );
};

export default DashboardContent;
