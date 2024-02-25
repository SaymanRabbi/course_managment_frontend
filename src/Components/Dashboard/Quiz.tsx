import { useParams } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import HeroIq from "./QuizCard";

const Quiz = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <DashboardCard title="Quiz" className="">
      <HeroIq id={id} />
    </DashboardCard>
  );
};

export default Quiz;
