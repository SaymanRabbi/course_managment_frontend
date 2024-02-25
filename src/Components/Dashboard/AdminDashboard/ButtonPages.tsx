import { useState } from "react";
import DetailsDes from "./DetailsInfo/DetailsDes";
import DetailsReviews from "./DetailsInfo/DetailsReviews";
import DeatilsInstructors from "./DetailsInfo/DeatilsInstructors";

const ButtonPages = () => {
  const [active, setActive] = useState("detailsdescription");
  return (
    <>
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => setActive("detailsdescription")}
          className="bg-gradient-to-r from-rgbFrom to-rgbTo text-textPrimary w-28 py-2"
        >
          Description
        </button>
        <button
          onClick={() => setActive("detailsreviews")}
          className="bg-gradient-to-r from-rgbFrom to-rgbTo text-textPrimary w-28 py-2"
        >
          Reviews
        </button>
        <button
          onClick={() => setActive("detailsinstructors")}
          className="bg-gradient-to-r from-rgbFrom to-rgbTo text-textPrimary w-28 py-2"
        >
          Instructors
        </button>
      </div>
      <div>
        {active === "detailsdescription" && <DetailsDes />}
        {active === "detailsreviews" && <DetailsReviews />}
        {active === "detailsinstructors" && <DeatilsInstructors />}
      </div>
    </>
  );
};

export default ButtonPages;
