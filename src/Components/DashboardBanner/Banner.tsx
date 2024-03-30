import axios from "axios";
import React, { ReactNode, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { LuAward } from "react-icons/lu";
import { MdAssignment } from "react-icons/md";
import { useUserStore } from "../../Store/UserStore";
import Button from "../Button/Button";
interface Props {
  className?: string;
  name: string;
  ernolledCourses: number;
  certificate: number;
  buttonTitle: string;
  children?: ReactNode;
  assignment?: number;
}
const Banner: React.FC<Props> = ({
  className,
  name,
  ernolledCourses,
  certificate,
  buttonTitle,
  children,
  assignment,
}) => {
  const { changeImage, user } = useUserStore((state) => state);
  const ref = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState("");
  const uploadImage = async () => {
    ref.current?.click();
  };
  const uploadImageDisplay = async () => {
    const uploadedfile = ref?.current?.files[0] as File;
    const catchUrl = URL.createObjectURL(uploadedfile);
    setImage(catchUrl);
    const dataform = new FormData();
    dataform.append("file", uploadedfile);
    try {
      const api = "https://api.cloudinary.com/v1_1/dnr5u3jpb/image/upload";
      const uploadPreset = "byni9vwa";
      // image upload
      const res = await axios.post(api, dataform, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          upload_preset: uploadPreset,
        },
      });
      const { secure_url } = res?.data;
      setImage(secure_url);
      changeImage(secure_url);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className={`grid grid-cols-12 ${className}`}>
      <div className=" col-span-12 max-w-[100%]">
        <div className=" p-[40px] flex justify-between items-center flex-wrap rounded-[10px] bg-gradient-to-r from-rgbFrom to-rgbTo">
          <div className=" flex items-center flex-wrap justify-center">
            {/* ------dashboard left img----- */}
            <div className=" w-[120px] h-[120px] mr-[20px] relative flex items-center justify-center">
              {loading ? (
                "Loading..."
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    uploadImage();
                  }}
                >
                  <img
                    src={
                      user?.ProfileImage
                        ? user?.ProfileImage
                        : image
                        ? image
                        : "https://i.ibb.co/4Z6nJvR/Group-1.png"
                    }
                    alt=""
                    className=" w-[120px] h-[120px] mr-[20px] object-cover border-[2px] rounded-full p-[4px] border-gray-50"
                  />
                  <div className=" absolute bottom-[5%] right-[36%] bg-bgPrimary/50 p-1 rounded-full">
                    <button
                      className=" w-[30px] h-[30px] flex items-center rounded-full justify-center"
                      type="submit"
                    >
                      <FaCloudUploadAlt className=" text-textPrimary text-[25px] cursor-pointer" />
                    </button>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    ref={ref}
                    onChange={uploadImageDisplay}
                    accept="image/*"
                    hidden
                  />
                </form>
              )}
            </div>
            {/* ------dashboard left img----- */}
            {/* ------dashboard left content----- */}
            <div>
              <h4 className=" font-[900] text-textPrimary text-[20px] mb-3 text-center sm:text-start">
                {name}
              </h4>
              <ul className=" flex gap-4">
                <li className=" flex items-center gap-x-2 text-textSecondary">
                  <IoMdBook className=" text-lg" />
                  <span>{ernolledCourses} Courses Enroled</span>
                </li>
                <li className=" flex items-center gap-x-2 text-textSecondary">
                  <LuAward className=" text-lg" />
                  <span>{certificate} Quiz Attempet</span>
                </li>
                <li className=" flex items-center gap-x-2 text-textSecondary">
                  <MdAssignment className=" text-lg" />
                  <span>{assignment} Assignment</span>
                </li>
              </ul>
            </div>
            {/* ------dashboard left content----- */}
          </div>
          <div className=" flex justify-center mt-2 mx-auto sm:mx-0">
            {/* button */}
            <Button className=" bg-bgPrimary text-textSecondary border-[1px] border-bgPrimary hover:bg-transparent hover:text-textSecondary !py-[12px] flex items-center gap-2">
              {buttonTitle}
              <IoArrowForwardOutline className=" text-lg" />
            </Button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Banner;
