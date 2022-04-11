import Header from "../../Components/Header";
import Container from "../../Components/Container";
import ResturantCard from "../../Components/ResturantCard";
import Footer from "../../Components/Footer";
const Japan = () => {
  return (
    <>
      <Header />
      {/* <Container>Recruits</Container> */}
      <div className="w-full min-h-screen  lg:max-w-[1024px] lg:mx-auto">
        {/* <div>Japan</div> */}
        <div className=" w-full lg:max-w-[1024px] lg:mx-auto">
          <ResturantCard country="Japan" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Japan;
