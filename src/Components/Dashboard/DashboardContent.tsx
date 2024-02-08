import DashboardTittle from "./DashboardTittle";
import { FaAward } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FcReading } from "react-icons/fc";
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
    <div className=" shadow-lg bg-bgPrimary/10 mb-[30px] px-[40px] py-[50px] rounded-[10px]">
      {/* -------dashboard tittel---- */}
      <DashboardTittle>
        <h4 className=" font-[700] text-textPrimary text-[20px]">Summery</h4>
      </DashboardTittle>
      {/* -------dashboard tittel---- */}
      {/* -------dashboard content---- */}
      <div className=" grid grid-cols-12 gap-5">
        {data.map((item, index) => (
          <div className=" bg-bgPrimary/15 py-[30px] px-[40px] mb-[20px] rounded-[20px] shadow-md xl:col-span-4 lg:col-span-5 col-span-12 border-[1px] border-bgPrimary/50">
            <div className=" mb-0 flex items-center" key={index}>
              {/* ------img----- */}
              <div className=" mr-[16px]">
                <span className=" text-[65px] text-error/85">{item.icon}</span>
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
      {/* -------dashboard content---- */}
    </div>
  );
};

export default DashboardContent;
