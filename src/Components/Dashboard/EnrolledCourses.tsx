import { useUserStore } from "../../Store/UserStore";
import PerchesCourseCard from "../Card/PerchesCourseCard";
import DashboardCard from "./DashboardCard";

const EnrolledCourses = () => {
  const { courses } = useUserStore((state: any) => state);
  return (
    <DashboardCard title="Enrolled Courses">
      <div className=" grid grid-cols-12 gap-4">
        {courses.map((course: any) => {
          return <PerchesCourseCard key={course.id} />;
        })}
      </div>
    </DashboardCard>
  );
};

export default EnrolledCourses;
