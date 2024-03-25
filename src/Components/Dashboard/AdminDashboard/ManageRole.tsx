import { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi2";
import { useUserStore } from "../../../Store/UserStore";
import DashboardCard from "../DashboardCard";

const ManageRole = () => {
  const { getAllUsers, allusers, makeAdmin } = useUserStore((state) => state);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllUser = async () => {
      await getAllUsers();
    };
    getAllUser();
  }, []);
  const makeAdminFunc = async (id: any) => {
    setLoading(true);
    await makeAdmin(id);
    allusers.filter((item: any) =>
      item._id === id ? (item.role = "student") : item
    );
    await getAllUsers();
    setLoading(false);
  };
  return (
    <DashboardCard title="Manage Roles">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Role Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {allusers.map((item: any, index: any) => (
                  <tr className="text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <p>{item?.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{item?.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <HiUsers />
                        <p>{item?.role}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className=" ">
                        {item?.role === "admin" ? (
                          <button
                            className="flex items-center gap-2 px-10 py-2 rounded-md my-2 bg-gray-400 cursor-not-allowed"
                            disabled={true}
                          >
                            <span>Admin</span>
                          </button>
                        ) : (
                          <button
                            className={`flex items-center gap-2 bg-gradient-to-r px-10 py-2 rounded-md my-2 ${
                              item?.role === "admin"
                                ? "bg-gray-400"
                                : "from-rgbFrom to-rgbTo"
                            }`}
                            onClick={() => makeAdminFunc(item._id)}
                            disabled={loading || item?.role === "admin"}
                          >
                            <span>
                              {loading
                                ? "Loading..."
                                : item.role === "admin"
                                ? "No Permission"
                                : "Make Admin"}
                            </span>
                          </button>
                        )}
                      </div>
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

export default ManageRole;
