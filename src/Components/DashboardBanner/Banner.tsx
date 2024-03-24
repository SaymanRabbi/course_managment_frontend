import axios from "axios";
import React, { ReactNode, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { LuAward } from "react-icons/lu";
import Button from "../Button/Button";
interface Props {
  className?: string;
  name: string;
  ernolledCourses: number;
  certificate: number;
  buttonTitle: string;
  children?: ReactNode;
}
const Banner: React.FC<Props> = ({
  className,
  name,
  ernolledCourses,
  certificate,
  buttonTitle,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(
    file ? URL.createObjectURL(file) : null
  );
  const uploadImage = async () => {
    if (!file) {
      return;
    }
    const dataform = new FormData();
    dataform.append("file", file);
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
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
                <>
                  <img
                    src={image ? image : "https://i.ibb.co/4Z6nJvR/Group-1.png"}
                    alt=""
                    className=" w-full h-full object-cover border-[2px] rounded-full p-[4px] border-gray-50"
                  />
                  <div
                    className=" absolute bottom-[5%] right-[36%] bg-bgPrimary/50 p-1 rounded-full"
                    onClick={() => {
                      ref.current?.click();
                    }}
                  >
                    <FaCloudUploadAlt
                      className=" text-textPrimary text-[25px] cursor-pointer"
                      onClick={() => {
                        uploadImage();
                      }}
                    />
                  </div>
                </>
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
      <input
        type="file"
        className="hidden"
        ref={ref}
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
        accept="image/*"
      />
      {children}
    </div>
  );
};

export default Banner;
