import ReactPlayer from "react-player";
import Container from "../Container/Container";
import { BiSearch } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

const VideoPlayer = () => {
  const [video, setVideo] = useState("");
  const [index, setIndex] = useState(0);
  const dummyData = [
    {
      id: 1,
      name: "Introduction",
      module: [
        {
          id: 0,
          name: "Its working bro dont worry1",
          video:
            "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1704521580/mt33rqkjeqopbcslutbr.mp4",
        },
        {
          id: 1,
          name: "Its working bro dont worry2",
          video:
            "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707495557/Untitled_Project_vd25j6.mp4",
        },
      ],
    },
  ];
  const ChangesVideoUrl = (module: any) => {
    setVideo(module.video);
    setIndex(module.id);
  };
  useEffect(() => {}, [video, setVideo, dummyData]);
  return (
    <Container>
      <div className=" pt-[200px] w-[90%] mx-auto grid-cols-12 grid gap-x-6">
        <div className=" md:col-span-8 col-span-12 w-[100%] h-[100%] bg-bgPrimary/10 rounded-md">
          <ReactPlayer
            url={video}
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        </div>
        {/* -------module name---- */}
        <div className="md:col-span-4 col-span-12">
          {/* ----heading--- */}
          <div className=" flex text-textPrimary font-bold gap-4 items-center w-[100%] mt-4 md:mt-0">
            <h2 className=" w-[40%]">Running Module :01</h2>
            <div className=" flex items-center gap-x-2 w-[60%]">
              <div className=" w-[100%] bg-gradient-to-r from-rgbFrom to-rgbTo h-[10px] rounded-md"></div>
              <h2>9/9</h2>
            </div>
          </div>
          {/* ----heading--- */}
          {/* Module Name----- */}
          <div className=" w-[100%] px-3 mt-3 overflow-y-auto max-h-[700px] h-[100%]  rounded-md p-3 bg-gradient-to-r from-rgbFrom to-rgbTo">
            {/* -----search--- */}
            <div className=" w-[100%] bg-bgPrimary rounded relative">
              <BiSearch className=" absolute top-1/2 left-2 transform -translate-y-1/2 text-textPrimary  font-bold" />
              <input
                type="text"
                name=""
                id=""
                className=" w-[100%] rounded py-3 px-8 bg-transparent outline-none border-none text-textPrimary"
                placeholder="Search Module"
              />
            </div>
            {/* -----search--- */}
            {/* ----module list---- */}
            {dummyData.map((data, i) => (
              <div
                className=" bg-bgPrimary p-3 rounded mt-4 w-[100%] overflow-hidden"
                key={i}
              >
                <h2 className=" text-textPrimary">
                  <span className=" font-bold">01 :</span> {data.name}
                </h2>
                {/* video */}
                {data.module.map((module, i) => (
                  <div
                    className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 ${
                      index === i ? " bg-rgbTo" : ""
                    }`}
                    key={i}
                    onClick={() => ChangesVideoUrl(module)}
                  >
                    <FaCheck className=" text-success text-[30px] w-[10%]" />
                    <h2 className=" text-textPrimary ml-2 w-[80%]">
                      {module.name}
                    </h2>
                  </div>
                ))}
              </div>
            ))}

            {/* ----module list---- */}
          </div>
          {/* Module Name----- */}
        </div>
        {/* -------module name---- */}
      </div>
    </Container>
  );
};

export default VideoPlayer;
