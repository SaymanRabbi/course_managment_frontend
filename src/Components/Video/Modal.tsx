import React from "react";
import Button from "../Button/Button";
interface ModalProps {
  modals: any;
  setOpen: void | any;
}
const Modal: React.FC<ModalProps> = ({ modals, setOpen }) => {
  return (
    <div className="absolute w-[70%]  mx-auto top-[30%] left-0 right-0 bg-white rounded-md p-6 text-black overflow-hidden ">
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
        <div className=" px-3 mt-4">
          <textarea className=" primary_input bg-gray-500 resize-none"></textarea>
        </div>
        <div>
          <Button className="w-[30%]  bg-gradient-to-r from-rgbFrom to-rgbTo">
            Submit Assignment
          </Button>
        </div>
        {/* ----submit assignment */}
        <div
          className=" absolute top-[-10px] right-1 cursor-pointer"
          onClick={(prev) => setOpen(false)}
        >
          <span className=" text-error text-[30px] font-bold">X</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
