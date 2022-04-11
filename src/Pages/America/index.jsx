import Header from "../../Components/Header";
import Container from "../../Components/Container";
import ResturantCard from "../../Components/ResturantCard";
import Footer from "../../Components/Footer";
const America = () => {
  return (
    <>
      <Header />
      {/* <Container>Insights</Container> */}
      <div className="w-full min-h-screen  lg:max-w-[1024px] lg:mx-auto ">
        {/* <div>美式</div> */}
        <div className=" w-full lg:max-w-[1024px] lg:mx-auto">
          <ResturantCard country="America" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default America;
