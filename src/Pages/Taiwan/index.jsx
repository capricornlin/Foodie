import Header from "../../Components/Header";
import Container from "../../Components/Container";
import ResturantCard from "../../Components/ResturantCard";
import Footer from "../../Components/Footer";
const Taiwan = () => {
  return (
    <>
      <Header />
      {/* <Container>Colleages</Container> */}
      <div className="w-full min-h-screen  lg:max-w-[1024px] lg:mx-auto">
        {/* <div>Tainwan</div> */}
        <div className=" w-full lg:max-w-[1024px] lg:mx-auto">
          <ResturantCard country="Taiwan" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Taiwan;
