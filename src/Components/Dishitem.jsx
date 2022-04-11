import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, minus } from "../slice/ItemSlice";

export const DishItem = ({ id, name, avatar, price, number, resturant }) => {
  const go = useNavigate();
  const dispatch = useDispatch();

  function addHandler() {
    dispatch(add(id));
  }

  function minusHandler() {
    dispatch(minus(id));
  }

  return (
    <>
      {/* <h1>{resturant}</h1> */}
      <div className="group  shadow-lg hover:shadow-md hover:shadow-green-600 ease-in duration-300 w-[150px] mx-5 mt-3 rounded-md overflow-hidden  ">
        {/* <h1 className="text-center text-green-700 mb-2">{resturant}</h1> */}
        <img
          className="object-cover h-[150px] group-hover:scale-105 group-hover:duration-700 duration-500 "
          src={avatar}
        />
        <div className="text-center font-medium">{name}</div>
        <div className="text-center">$:{price}</div>
        <div className="flex justify-around  ">
          <div className="cursor-pointer hover:text-green-700 hover:scale-110 duration-100" onClick={minusHandler}>
            -1
          </div>
          <div className="text-center text-green-700">{number}</div>
          <div className="cursor-pointer hover:text-green-700 hover:scale-110 duration-100" onClick={addHandler}>
            +1
          </div>
        </div>
        {/* <div className="text-center">{number}</div> */}
      </div>
    </>
  );
};

export default DishItem;
