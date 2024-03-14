import React from "react";
interface ModalProps {
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute w-[70%] z-[10000]  mx-auto top-[30%] left-0 bottom-[30%] right-0 bg-white rounded-md p-6">
      {children}
    </div>
  );
};

export default Modal;
