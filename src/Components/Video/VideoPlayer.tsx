import ReactPlayer from "react-player";
import Container from "../Container/Container";
import { BiSearch } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
interface IModule {
  id: number;
  name: string;
  video: string;
  itWatched: boolean;
}
interface IDummyData {
  id: number;
  name: string;
  module: IModule[];
}

const VideoPlayer = () => {
  const [video, setVideo] = useState("");
  const [index, setIndex] = useState(0);
  const dummyData: IDummyData[] = [
    {
      id: 1,
      name: "Introduction",
      module: [
        {
          id: 0,
          name: "Introduction to Python",
          video:
            "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1704521580/mt33rqkjeqopbcslutbr.mp4",
          itWatched: false,
        },
        {
          id: 1,
          name: "Its Music so relax some time",
          video:
            "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707495557/Untitled_Project_vd25j6.mp4",
          itWatched: false,
        },
        {
          id: 2,
          name: "Paython 100 days challenge",
          video:
            "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707497233/049_Using_the_for_loop_with_Python_Lists_cjirlp.mp4",
          itWatched: false,
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
        <div className=" md:col-span-7  col-span-12 w-[100%] h-[100%] bg-bgPrimary/10 rounded-md">
          <ReactPlayer
            url={video}
            className="  ]"
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
        <div className="md:col-span-5 col-span-12">
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
          <div className=" w-[100%] px-3 mt-3 overflow-y-auto max-h-[700px] h-[100%]  rounded-md p-3">
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
