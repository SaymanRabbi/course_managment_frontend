import instructor from "../../../../../public/images/message/teacher.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const DeatilsInstructors = () => {
  return (
    <div className="mt-8 text-textPrimary">
      <div className="md:flex gap-8">
        <img className="h-32 w-32 rounded-full" src={instructor} alt="" />

        <div>
          <div className="mt-2 md:mt-0">
            <p className="font-bold text-xl">Rosalina D. Willaim</p>
            <p className="text-sm mt-1">Blogger/Photographer</p>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
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
