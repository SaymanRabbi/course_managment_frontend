import Container from "../../Components/Container/Container";
import hero from "../../../public/images/hero/hero.jpg";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text Area */}
        <div className="my-auto">
          <p className="text-[#F2277E] tracking-widest ">EDUCATION SOLUTION</p>
          <h1 className="text-2xl lg:text-5xl font-bold text-textPrimary py-8">
            Cloud-based LMS Trusted by 1000+
          </h1>
          <p className="text-base lg:text-xl text-textSecondary leading-tight">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        {/* Images Area */}
        <div className="mt-8 md:mt-0">
          <img className="mx-auto" src={hero} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
