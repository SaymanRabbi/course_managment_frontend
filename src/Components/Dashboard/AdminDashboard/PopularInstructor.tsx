import { BiSolidVideos } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
import { useUserStore } from "../../../Store/UserStore";
import DashboardCard from "../DashboardCard";

const PopularInstructor = () => {
  const { allusers } = useUserStore((state) => state);
  return (
    <DashboardCard title="Popular Instructors">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Courses
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Reviews
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {allusers.map((item: any, index: any) =>
                  item?.role === "admin" ? (
                    <tr className="text-textPrimary" key={index}>
                      <td className="px-6 py-4">
                        <img
                          className="h-[50px] w-[50px] rounded-full object-cover"
                          src={item?.ProfileImage}
                          alt=""
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p>{item.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <HiUsers />
                          <p>{item.students || 0}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <BiSolidVideos />
                          <p>{1}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MdReviews />
                          <p>{item.reviews || 0}</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default PopularInstructor;
