import SimpleSlider from "./Slider";
import { AiFillStar } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
const ItemHeader = ({ resturantName }) => {
  return (
    <>
      <div className="m-3">
        <h1 className="text-3xl text-green-700 font-semibold ">{resturantName}</h1>
        <div className="flex items-center">
          <FaMedal className="text-green-700 text-2xl" />
          <div className="ml-4">
            <h2 className="flex items-center my-2">
              <AiFillStar className="text-green-700" />
              <div className="ml-1">4.7(500+評分)</div>
            </h2>
            <h2 className="text-gray-500">20-30分鐘 60TWD 費用</h2>
          </div>
        </div>
      </div>
      <div className="w-max-[500px]"></div>

      <div className="hidden lg:flex  justify-center">
        <SimpleSlider />
      </div>

      {/* <SimpleSlider /> */}
    </>
  );
};

export default ItemHeader;
