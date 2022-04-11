import Header from "../../Components/Header";
import Container from "../../Components/Container";
import ResturantCard from "../../Components/ResturantCard";
import { Link, animateScroll } from "react-scroll";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <div className=" w-full lg:max-w-[1024px] lg:mx-auto">
          <ResturantCard country="all" />
        </div>
      </div>
      <div className="flex justify-end m-5">
        <button
          className="font-medium  text-green-700 hover:text-green-900 hover:scale-105 duration-100  "
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          {/* <BiArrowFromBottom className="h-[30px] w-[30px] m-1" /> */}
          <FaArrowUp className="h-[30px] w-[30px] m-1 hover:animate-bounce" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
