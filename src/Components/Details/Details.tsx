import { BiVideo } from "react-icons/bi";
import DynamicHedding from "../DynamicHedding/DynamicHedding";
const Details = () => {
  const content = [
    {
      id: 1,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
    {
      id: 2,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
    {
      id: 3,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
    {
      id: 4,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
    {
      id: 5,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
    {
      id: 6,
      name: "150+ videos in 15 modules",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    },
  ];
  return (
    <div>
      <div>
        <img
          className="h-32 mx-auto"
          src="https://learnwithsumit.com/assets/images/svgs/peep1.svg"
          alt=""
        />
        <DynamicHedding>
          <h4 className="text-2xl lg:text-4xl font-bold text-textPrimary py-4 text-center">
            Our Curses at a glance
          </h4>
        </DynamicHedding>
        <p className="text-textPrimary text-center text-base">
          What will be in this course
        </p>
      </div>
      {/* Course Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-bgPrimary/20 border-[.5px] border-bgPrimary rounded-[10px] my-4 p-4 mt-8">
        {content.map((item) => {
          return (
            <div
              key={item.id}
              className="border-b border-r border-bgPrimary p-8"
            >
              <BiVideo
                size={50}
                className="mx-auto bg-gradient-to-r text-[#384fde]"
              />
              <p className="font-bold text-textPrimary text-center">
                {item.name}
              </p>
              <p className="text-textSecondary text-center text-sm mt-2 leading-8">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
