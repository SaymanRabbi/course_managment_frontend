import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../Store/UserStore";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";

const AssignmentDetails = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const {
    getAllAssignments,
    allAssignments,
    updateAssignmentMarks,
    success,
    isLoading,
  } = useUserStore((state) => state);

  useEffect(() => {
    const fetchAssignments = async () => {
      await getAllAssignments();
    };
    fetchAssignments();
  }, []);
  const submitAssignmentMark = async (e: any, userId: any, moduleId: any) => {
    e.preventDefault();
    const marks = e.target.marks.value;
    if (marks > 60 || marks < 0)
      return toast.error("Marks should be between 0 to 60");
    const note = e.target.note.value || "No Feedback Given";
    if (!marks || marks === "" || marks.length < 1) {
      return toast.error("Please Enter Marks");
    }
    const data = {
      AssignmentMarks: marks,
      AssignmentNote: note,
      userId,
    };
    await updateAssignmentMarks(moduleId, data);
    if (success) {
      setTimeout(() => {
        toast.success("Marks Submitted Successfully");
        Navigate("/dashboard/allAssignment");
      }, 400);
    }
  };
  return (
    <DashboardCard title="Assignment Details">
      {allAssignments.map((item: any, index: any) =>
        item?._id === id ? (
          <form
            key={index}
            className=" bg-bgPrimary/10 md:px-[40px] py-[40px] rounded-[20px] px-[20px] text-white"
            onSubmit={(e) =>
              submitAssignmentMark(e, item?.userId?._id, item?._id)
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
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
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
