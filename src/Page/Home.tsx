import HomeCard from "../Components/Card/HomeCard";
import Container from "../Components/Container/Container";

const Home = () => {
  return (
    <Container className=" pt-[200px] h-[100%] md:px-[30px] px-[10px]">
      <div className="mt-12 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-28 w-[90%] mx-auto">
        <HomeCard />
      </div>
    </Container>
  );
};

export default Home;
