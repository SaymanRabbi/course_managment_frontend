import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../Store/UserStore";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";

const AssignmentDetails = () => {
  const { id } = useParams();

  const { getAllAssignments, allAssignments } = useUserStore((state) => state);
  useEffect(() => {
    const fetchAssignments = async () => {
      await getAllAssignments();
    };
    fetchAssignments();
  }, []);
  const submitAssignmentMark = async (e: any, userId: any, moduleId: any) => {
    e.preventDefault();
    const marks = e.target.marks.value;
    const note = e.target.note.value;
    if (!marks || marks === "" || marks.length < 1) {
      return toast.error("Please Enter Marks");
    }
    const data = {
      AssignmentMarks: marks,
      AssignmentNote: note,
      userId,
      moduleId,
    };

    setTimeout(() => {
      toast.success("Assignment Marked Successfully");
    }, 1000);
  };
  return (
    <DashboardCard title="Assignment Details">
      {allAssignments.map((item: any, index: any) =>
        item?._id === id ? (
          <form
            key={index}
            className=" bg-bgPrimary/10 md:px-[40px] py-[40px] rounded-[20px] px-[20px] text-white"
            onSubmit={(e) =>
              submitAssignmentMark(e, item?.userId?._id, item?.moduleId)
            }
          >
            <h2 className=" font-bold">
              <span className=" text-success font-bold text-[18px]">
                Assignment Title :{" "}
              </span>{" "}
              {item?.AssignmentName}
            </h2>
            <h2 className=" font-bold">
              <span className="  font-bold text-[18px]">Question : </span>{" "}
              {item?.AssignmentDescription}
            </h2>
            {/* -----user answer---- */}
            <div className="  bg-gray-400/100  text-black max-h-[200px] h-[100%] min-h-[100px] my-3 font-bold rounded p-3 overflow-y-auto w-[100%]">
              {item?.AssignmentFile}
            </div>
            {/* -----user answer---- */}
            {/* admin mark */}
            <input
              type="text"
              className=" primary_input bg-gray-400/10  text-gray-100"
              placeholder="Enter Marks"
              name="marks"
            />
            {/* aditional note */}
            <textarea
              className=" primary_input bg-gray-400/10  text-gray-100 resize-none"
              placeholder="Additional Note"
              name="note"
            ></textarea>
            {/* aditional note */}
            <Button
              className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px]"
              type="submit"
            >
              Submit Mark
            </Button>
            {/* admin mark */}
          </form>
        ) : (
          ""
        )
      )}
    </DashboardCard>
  );
};

export default AssignmentDetails;
