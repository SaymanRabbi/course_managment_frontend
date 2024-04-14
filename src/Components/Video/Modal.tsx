import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useUserStore } from "../../Store/UserStore";
import Button from "../Button/Button";
interface ModalProps {
  modals: any;
  setOpen: void | any;
  id: string;
}
const Modal: React.FC<ModalProps> = ({ modals, setOpen, id }) => {
  const { addAssignment, getAssignmentswithID, assignments } = useUserStore(
    (state) => state
  );
  useEffect(() => {
    const fetchAssignments = async () => {
      await getAssignmentswithID();
    };
    fetchAssignments();
  }, []);
  const submitAssignment = async (e: any) => {
    e.preventDefault();
    const AssignmentFile = e.target.answer.value;
    if (!AssignmentFile || AssignmentFile === "" || AssignmentFile.length < 1) {
      return toast.error("Please Write Something");
    }
    const data = {
      moduleId: id,
      AssignmentMarks: 1,
      AssignmentFile,
      AssignmentName: modals?.title,
      AssignmentDescription: modals?.assignmentDetails?.instructions,
      AssignmentDeadline: modals?.assignmentDetails?.deadline,
    };
    addAssignment(data);
    setTimeout(() => {
      toast.success("Assignment Submitted Successfully");
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      {assignments?.find((assignment: any) => assignment?.moduleId === id) ? (
        <div className="absolute w-[30%]  mx-auto top-[40%] left-0 right-0 bg-white rounded-md p-6 text-black overflow-hidden ">
          <span>
            <strong className=" text-success">
              Already Submitted The Assignment Wait For Result
            </strong>
          </span>

          <div
            className=" absolute top-[1px] right-2 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <span className=" text-error text-[25px] font-bold">X</span>
          </div>
        </div>
      ) : (
        <form
          className="absolute w-[70%]  mx-auto top-[20%] left-0 right-0 bg-white rounded-md p-6 text-black overflow-hidden "
          onSubmit={(e) => submitAssignment(e)}
        >
          <div className=" relative">
            {/* deadline */}
            <div>
              <span>
                <strong>Deadline: {modals?.assignmentDetails?.deadline}</strong>
              </span>
            </div>
            {/* instruction */}
            <div>
              <span>
                <strong className=" text-[13px] font-[400]">
                  {modals?.assignmentDetails?.instructions}
                </strong>
              </span>
            </div>
            {/* ----submit assignment */}
            <div className=" mt-4">
              <textarea
                className=" primary_input bg-gray-400  text-black resize-none"
                name="answer"
                rows={10}
                placeholder="Write Your Answer Here..."
              />
            </div>
            <div>
              <Button
                className="w-[30%]  bg-gradient-to-r from-rgbFrom to-rgbTo"
                type="submit"
              >
                Submit Assignment
              </Button>
            </div>
            {/* ----submit assignment */}
            <div
              className=" absolute top-[-10px] right-1 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <span className=" text-error text-[30px] font-bold">X</span>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Modal;
