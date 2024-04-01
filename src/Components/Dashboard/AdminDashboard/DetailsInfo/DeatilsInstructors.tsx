import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
interface DeatilsInstructorsProps {
  insTructor: any;
}

const DeatilsInstructors: React.FC<DeatilsInstructorsProps> = ({
  insTructor,
}) => {
  return (
    <div className="mt-8 text-textPrimary">
      <div className="md:flex gap-8">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={insTructor?.ProfileImage}
          alt=""
        />

        <div>
          <div className="mt-2 md:mt-0">
            <p className="font-bold text-xl">{insTructor?.name}</p>
            <p className="text-sm mt-1">{insTructor?.ExpartIn}</p>
            <p className="mt-4">{insTructor?.Biography}</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="border border-textPrimary p-2 rounded-lg">
              <FaFacebookF size={15} />
            </div>
            <div className="border border-textPrimary p-2 rounded-lg">
              <FaYoutube size={15} />
            </div>
            <div className="border border-textPrimary p-2 rounded-lg">
              <FaInstagram size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeatilsInstructors;
