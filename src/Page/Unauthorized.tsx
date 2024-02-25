import Container from "../Components/Container/Container";

const Unauthorized = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-[80vh]">
        <h2 className="text-4xl font-bold text-error">Unauthorized</h2>
      </div>
    </Container>
  );
};

export default Unauthorized;
