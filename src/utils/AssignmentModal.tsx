// import { ImCross } from "react-icons/im";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const AssignmentModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-bgPrimary shadow-lg rounded-lg p-6 transition-all w-[70%] ${
          open ? "scale-100 opacity-100" : "scale-100 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-1 right-[5px] py-1 px-2  text-red-600 font-bold hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          {" "}
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default AssignmentModal;
