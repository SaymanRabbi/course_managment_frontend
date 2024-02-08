import Container from "../Container/Container";
import hero3 from "../../../public/images/hero/hero3.webp";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-28 w-[95%] mx-auto">
        {/* Text Area */}
        <div className="my-auto">
          <p className="text-[#F2277E] tracking-[6px] ">EDUCATION SOLUTION</p>
          <h1 className="text-2xl lg:text-5xl font-bold text-textPrimary py-8">
            Cloud-based LMS Trusted by 1000+
          </h1>
          <p className="text-base lg:text-xl text-textSecondary leading-tight">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>
        {/* Images Area */}
        <div className="mt-8 md:mt-0">
          <img className="mx-auto w-[100%]" src={hero3} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
