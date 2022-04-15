import Header from "../../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { DishItem } from "../../Components/Dishitem";
import ItemHeader from "../../Components/ItemHeader";
import { Link, animateScroll } from "react-scroll";
import { BiArrowFromBottom } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineFastfood, MdNoDrinks } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext";
// import ResturantMap from "../../Components/ResturantMap";

const Recommend = () => {
  return (
    <div>
      <Link
        className=" hover:text-green-900 hover:scale-105  text-2xl font-medium block cursor-pointer text-center mb-2 text-green-700 duration-100"
        to="R"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Recommended
      </Link>
    </div>
  );
};

const Foods = () => {
  return (
    <div>
      <Link
        className="hover:text-green-900 hover:scale-105 text-2xl font-medium block cursor-pointer text-center mb-2 text-green-700 duration-100"
        to="F"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Foods
      </Link>
    </div>
  );
};

const Drinks = () => {
  return (
    <div>
      <Link
        className="hover:text-green-900 hover:scale-105 text-2xl font-medium block cursor-pointer text-center text-green-700 duration-100"
        to="D"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Drinks
      </Link>
    </div>
  );
};

const PriceSearch = ({ SearchFrom, SetSearchFrom, SearchTo, SetSearchTo }) => {
  return (
    <>
      <div className="mt-6  border-t-2 border-gray-200">
        <div className="w-2/3 mx-auto text-center text-green-700  font-bold text-2xl mb-2 mt-2">Price range</div>

        <div className="text-center">
          <input
            className="w-2/3 rounded-2xl border-none ring-2 ring-green-600 focus:ring-2  focus:ring-green-900"
            type="number"
            placeholder="Search Price From..."
            onChange={(e) => {
              SetSearchFrom(e.target.value);
              // console.log("From: ", e.target.value);
            }}
          />
        </div>

        <div className="my-2 text-center text-gray-500">between</div>
        <div className="text-center mb-4">
          <input
            className="w-2/3 rounded-2xl border-none ring-2 ring-green-600 focus:ring-2  focus:ring-green-900 "
            type="number"
            placeholder="Search Price To..."
            // value={1000}
            onChange={(e) => {
              SetSearchTo(e.target.value);
              console.log("To: ", e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const Sign = () => {
  return (
    <>
      <div className="my-[100px] p-[50px] text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
        Please Signin First
      </div>
    </>
  );
};

const Resturant = ({ resturantName }) => {
  const itemReducer = useSelector((state) => state.ItemReducer);
  const items = itemReducer.Item;
  const [LeftNav, setLeftNav] = useState(false);
  const { currentUser } = useAuth();
  const [SearchFrom, SetSearchFrom] = useState(0);
  // console.log("SearchFrom", SearchFrom);
  const [SearchTo, SetSearchTo] = useState(10000);

  function HandleLeftNav() {
    setLeftNav(!LeftNav);
  }

  return currentUser ? (
    <>
      <Header />

      <ItemHeader resturantName={resturantName} />
      <div onClick={HandleLeftNav} className="lg:hidden cursor-pointer fixed top-[258px]">
        <AiOutlineMenu className=" text-green-700 relative text-2xl hover:text-green-900 hover:scale-110 duration-100 hover:cursor-pointer" />
      </div>
      <div
        className={
          LeftNav
            ? "fixed z-10 top-[280px] bg-gray-300/90 w-1/3 max-w-[500px] shadow-lg rounded-md lg:hidden"
            : "hidden"
        }
      >
        <Recommend />
        <Foods />
        <Drinks />
        <PriceSearch
          SearchFrom={SearchFrom}
          SetSearchFrom={SetSearchFrom}
          SearchTo={SearchTo}
          SetSearchTo={SetSearchTo}
        />
      </div>

      <div className="w-full flex mt-10 ml-8 ">
        {/*TODO: 左側欄 */}

        <div className="hidden lg:w-[300px] lg:block sticky top-[100px] self-start mt-5 ">
          <Recommend />
          <Foods />
          <Drinks />
          <PriceSearch
            SearchFrom={SearchFrom}
            SetSearchFrom={SetSearchFrom}
            SearchTo={SearchTo}
            SetSearchTo={SetSearchTo}
          />
        </div>

        {/* TODO:Recommend */}
        <div className="lg:max-w-[1024px] lg:mx-auto">
          <h1 id="R" className=" text-3xl text-green-700 font-medium border-b-2 border-gray-200 py-2 mb-2">
            Recommended
          </h1>
          <div className="flex flex-wrap">
            {items
              .filter((item) => {
                const { price } = item;
                if (SearchFrom <= price && price <= SearchTo) {
                  return item;
                } else if (SearchFrom <= price && SearchTo == "") {
                  return item;
                } else if (price <= SearchTo && SearchFrom == "") {
                  return item;
                }
              })
              .map((item) => {
                const { id, name, avatar, price, number, type, resturant } = item;

                if (type === "Recommend" && resturantName == resturant) {
                  //console.log("resturant", resturant);
                  return (
                    <div key={id}>
                      <DishItem id={id} name={name} avatar={avatar} price={price} number={number} />
                    </div>
                  );
                }
              })}
          </div>

          {/* TODO: Foods */}
          <div className="flex items-center py-2 mb-2 mt-10  ">
            <div>
              <MdOutlineFastfood className="text-green-700 text-2xl" />
            </div>
            <div>
              <h1 id="F" className=" text-3xl text-green-700 font-medium   ">
                Foods
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap border-t-2  ">
            {items
              .filter((item) => {
                const { price } = item;
                if (SearchFrom <= price && price <= SearchTo) {
                  return item;
                } else if (SearchFrom <= price && SearchTo == "") {
                  return item;
                } else if (price <= SearchTo && SearchFrom == "") {
                  return item;
                }
              })
              .map((item) => {
                const { id, name, avatar, price, number, type, resturant } = item;

                if (type === "Food" && resturantName == resturant) {
                  //console.log("resturant", resturant);
                  return (
                    <div key={id}>
                      <DishItem id={id} name={name} avatar={avatar} price={price} number={number} />
                    </div>
                  );
                }
              })}
          </div>

          {/* TODO:Drinks */}
          <div className="flex items-center py-2 mb-2 mt-10  ">
            <div>
              <MdNoDrinks className="text-green-700 text-2xl" />
            </div>
            <div>
              <h1 id="D" className=" text-3xl text-green-700 font-medium   ">
                Drinks
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap mb-3  border-t-2">
            {items
              .filter((item) => {
                const { price } = item;
                if (SearchFrom <= price && price <= SearchTo) {
                  return item;
                } else if (SearchFrom <= price && SearchTo == "") {
                  return item;
                } else if (price <= SearchTo && SearchFrom == "") {
                  return item;
                }
              })
              .map((item) => {
                const { id, name, avatar, price, number, type, resturant } = item;
                if (type === "Drink" && resturantName == resturant) {
                  return (
                    <div key={id}>
                      <DishItem id={id} name={name} avatar={avatar} price={price} number={number} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="flex justify-end m-5">
        <button
          className="font-medium  text-green-700 hover:text-green-900 hover:scale-105 duration-100  "
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <FaArrowUp className="h-[30px] w-[30px] m-1 hover:animate-bounce " />
        </button>
      </div>
    </>
  ) : (
    <>
      <Header />
      <Sign />
    </>
  );
};

export default Resturant;
