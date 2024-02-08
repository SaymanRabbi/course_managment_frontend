import HomeCard from "../Components/Card/HomeCard";
import Container from "../Components/Container/Container";
import Details from "../Components/Details/Details";
import Hero from "../Components/Hero/Hero";

const Home = () => {
  return (
    <Container className=" pt-[150px] h-[100%] md:px-[30px] px-[10px]">
      <Hero />
      <div className="mt-12 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-24 w-[90%] mx-auto">
        <HomeCard />
      </div>
      <div className="mt-20 w-[90%] mx-auto">
        <Details />
      </div>
    </Container>
  );
};

export default Home;
