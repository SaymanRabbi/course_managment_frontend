import React from "react";

interface notFound {
  title?: string;
  ClassName?: string;
}

const NotFound: React.FC<notFound> = ({ title, ClassName }) => {
  return (
    <div className={`w-[100%] flex justify-center ${ClassName}`}>
      <p
        className=" text-center text-error  mt-3 font-bold text-[20px]
w-[100%]
"
      >
        {title}
      </p>
    </div>
  );
};

export default NotFound;
