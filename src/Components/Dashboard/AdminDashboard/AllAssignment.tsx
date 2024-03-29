import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../Store/UserStore";
import DashboardCard from "../DashboardCard";

const AllAssignment = () => {
  const { getAllAssignments, allAssignments } = useUserStore((state) => state);
  useEffect(() => {
    const fetchAssignments = async () => {
      await getAllAssignments();
    };
    fetchAssignments();
  }, []);
  return (
    <DashboardCard title="All Assignments">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Photo
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    User Email
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Assignment Name
                  </th>

                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    See Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {allAssignments?.map((item: any, index: any) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <img
                        src={item?.userId?.ProfileImage}
                        className=" w-[40px] h-[40px] rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{item?.userId?.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{item?.AssignmentName}</p>
                    </td>
                    <td className="px-6 py-4">
                      {item?.adminSeen ? (
                        <button
                          className="bg-gray-500 text-[#fff] px-4 py-1 rounded-md"
                          disabled
                        >
                          Seen
                        </button>
                      ) : (
                        <Link to={`/dashboard/assignment-details/${item?._id}`}>
                          <button className="bg-gradient-to-r from-rgbFrom to-rgbTo text-[#fff] px-4 py-1 rounded-md">
                            See Details
                          </button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AllAssignment;
