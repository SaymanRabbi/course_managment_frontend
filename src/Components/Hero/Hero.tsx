import hero3 from "../../../public/images/hero/hero3.webp";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <Container className="pt-10 min-h-[75vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-28 w-[95%] mx-auto">
        {/* Text Area */}
        <div className="my-auto">
          <p className="text-[#F2277E] tracking-[6px] ">COURSE MANAGMENT</p>
          <h1 className="text-2xl lg:text-5xl font-bold text-textPrimary py-8">
            Welcome to the Course Management System
          </h1>
          <p className="text-base lg:text-xl text-textSecondary leading-tight">
            Revolutionizing Education :) Our Cloud-based Learning Management
            System Trusted by Over 1000 Institutions.
          </p>
        </div>
        {/* Images Area */}
        <div className="mt-8 md:mt-0">
          <img className="mx-auto w-[100%] object-cover" src={hero3} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
