import Header from "../../Components/Header";
import ResturantCard from "../../Components/ResturantCard";
import SelectCard from "../../Components/SelectCard";
import Footer from "../../Components/Footer";
const Myselect = () => {
  return (
    <>
      <Header />
      <div className=" w-full min-h-screen  lg:max-w-[1024px] lg:mx-auto mb-[200px]">
        {/* <ResturantCard /> */}
        <SelectCard />
      </div>
      <Footer />
    </>
  );
};

export default Myselect;
