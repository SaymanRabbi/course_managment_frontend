// import Button from "../Button/Button";
import Button from "../Button/Button";
import Container from "../Container/Container";
import DynamicHedding from "../DynamicHedding/DynamicHedding";
interface Route {
  title: string;
}

const Footer = () => {
  const routeLinks: Route[] = [
    {
      title: "About Us",
    },
    {
      title: "Teacher",
    },
    {
      title: "Success Page",
    },
    {
      title: "Location",
    },
  ];
  const routeSocialLinks: Route[] = [
    {
      title: "LinkedIn",
    },
    {
      title: "Facebook",
    },
    {
      title: "Instagram",
    },
    {
      title: "Youtube",
    },
  ];
  const routeCourse: Route[] = [
    {
      title: "Web Development",
    },
    {
      title: "Digital Marketing",
    },
    {
      title: "ILTES Course",
    },
    {
      title: "Soft Skills",
    },
  ];
  return (
    <>
      <div className="py-6 mt-32">
        <Container className=" text-textPrimary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold">
                Still You Need Our Support ?
              </h2>
              <p className=" text-textSecondary mt-3">
                Don’t wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>
            <div>
              <DynamicHedding>
                <h2>Subscribe our newsletter</h2>
              </DynamicHedding>
              <div className="flex items-center gap-2">
                <input
                  className="px-4 py-4 rounded-md w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email"
                />
                <Button className="bg-gradient-to-r from-[#384fde] to-[#985cf0] !px-6 !py-4 w-[30%]">
                  subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-600 my-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            <div>
              <DynamicHedding>
                <p>Course Management</p>
              </DynamicHedding>
              <div>
                <p>
                  It is an online course management website. Make your journey
                  with course management and grow your skills and touch the
                  world.
                </p>
              </div>
            </div>
            <div>
              <DynamicHedding>Quick Links</DynamicHedding>
              <div>
                {routeLinks.map((item, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <DynamicHedding>Follow US</DynamicHedding>
              <div>
                {routeSocialLinks.map((item, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <DynamicHedding>Course</DynamicHedding>
              <div>
                {routeCourse.map((item, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
