import Header from "../../Components/Header";
import Container from "../../Components/Container";
import ResturantCard from "../../Components/ResturantCard";
import Footer from "../../Components/Footer";
const Europe = () => {
  return (
    <>
      <Header />
      {/* <Container>Hiring</Container> */}
      <div className="w-full min-h-screen  lg:max-w-[1024px] lg:mx-auto">
        {/* <div>Europe</div> */}
        <div className=" w-full lg:max-w-[1024px] lg:mx-auto">
          <ResturantCard country="Europe" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Europe;
