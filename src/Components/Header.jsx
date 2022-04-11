import { useNavigate } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { ImSpoonKnife } from "react-icons/im";

import { useState } from "react";

const ButtonLogin = () => {
  const [LoginPop, setLoginPop] = useState(false);

  return (
    <>
      <button
        className=" active:bg-gray-700 active:ring-4 duration-100 ring-black ring-offset-2 hover:bg-black font-medium cursor-pointer text-white py-2 px-4  mr-5 bg-gray-800  flex  items-center justify-center rounded-md"
        onClick={() => setLoginPop(true)}
      >
        Login
      </button>
      <LoginPopup LoginPop={LoginPop} setLoginPop={setLoginPop} />
    </>
  );
};

const ButtonLoginmobile = () => {
  const [LoginPop, setLoginPop] = useState(false);

  return (
    <>
      {/* <div className="flex justify-start hover:bg-black"> */}
      <button
        className="font-medium cursor-pointer hover:scale-110 hover:font-semibold duration-100 text-black py-2 px-4  mr-5 flex  items-center justify-center "
        onClick={() => setLoginPop(true)}
      >
        Login
      </button>
      {/* </div> */}

      <LoginPopup LoginPop={LoginPop} setLoginPop={setLoginPop} />
    </>
  );
};

const ButtonSignup = () => {
  const [SignupPop, setSignupPop] = useState(false);
  return (
    <>
      <button
        className="active:bg-green-900 active:ring-4 duration-100 ring-green-900 ring-offset-2 font-medium  text-white py-2 px-4  mr-5 bg-green-700  hover:bg-green-900 flex items-center justify-center rounded-md cursor-pointer"
        onClick={() => setSignupPop(true)}
      >
        SignUp
      </button>
      <SignupPopup SignupPop={SignupPop} setSignupPop={setSignupPop} />
    </>
  );
};

const ButtonSignupmobile = () => {
  const [SignupPop, setSignupPop] = useState(false);
  return (
    <>
      <button
        className="hover:scale-110 duration-100 hover:font-semibold font-medium  text-green-700 py-2 px-4  mr-5  flex items-center justify-center  cursor-pointer"
        onClick={() => setSignupPop(true)}
      >
        SignUp
      </button>
      <SignupPopup SignupPop={SignupPop} setSignupPop={setSignupPop} />
    </>
  );
};

const ButtonCheckout = () => {
  const itemReducer = useSelector((state) => state.ItemReducer);
  const items = itemReducer.Item;
  const go = useNavigate();
  let itemNumber = 0;
  for (let i = 0; i < items.length; i++) {
    const { number } = items[i];

    if (number >= 1) {
      itemNumber += number;
    }
  }
  return (
    <>
      <button
        className="active:bg-green-900 active:ring-4 duration-100 ring-green-900 ring-offset-2 font-medium  text-white  py-2 px-4    bg-green-700  hover:bg-green-900 flex items-center justify-center rounded-md cursor-pointer"
        onClick={() => {
          go("/Checkout");
        }}
      >
        Checkout
        <AiOutlineShoppingCart className="ml-1" />
        <div className="ml-1">{itemNumber}</div>
      </button>
    </>
  );
};

const ButtonCheckoutmobile = () => {
  const itemReducer = useSelector((state) => state.ItemReducer);
  const items = itemReducer.Item;
  const go = useNavigate();
  let itemNumber = 0;
  for (let i = 0; i < items.length; i++) {
    const { number } = items[i];

    if (number >= 1) {
      itemNumber += number;
    }
  }
  return (
    <>
      <button
        className="hover:scale-110 duration-100 hover:font-semibold font-medium  text-green-700  py-2 px-4     flex items-center justify-center  cursor-pointer"
        onClick={() => {
          go("/Checkout");
        }}
      >
        Checkout
        <AiOutlineShoppingCart className="ml-1" />
        <div className="ml-1">{itemNumber}</div>
      </button>
    </>
  );
};

const ButtonNav = (props) => {
  const handleClick = () => {
    if (!props.NavPop) {
      props.setNavpop(true);
    } else {
      props.setNavpop(false);
    }
  };

  return (
    <>
      <AiOutlineMenu className="relative text-3xl hover:text-green-700 hover:cursor-pointer" onClick={handleClick} />
    </>
  );
};

const Showmenu = () => {
  return (
    <>
      <ButtonLoginmobile />
      <ButtonSignupmobile />
      <ButtonCheckoutmobile />
    </>
  );
};

const Header = () => {
  const go = useNavigate();
  const [Navpop, setNavpop] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white border-b-[1px] border-gray-300 z-10 shadow-md ">
        {/*TODO: 上層 */}
        <div className="flex justify-between items-center h-[60px] px-2 lg:max-w-[1024px] lg:mx-auto lg:px-0 ">
          {/* 左側 */}
          <div
            className="group font-semibold text-green-700 text-3xl cursor-pointer hover:text-green-900 flex justify-center items-center "
            onClick={() => {
              go("/");
            }}
          >
            <div>
              {" "}
              <ImSpoonKnife className="origin-center group-hover:animate-bounce duration-300" />
            </div>
            <div> Foodie</div>
            {/* Foodie */}
          </div>
          {/* 右側 */}
          <div className="md:hidden">
            <ButtonNav NavPop={Navpop} setNavpop={setNavpop} />
          </div>
          <div className=" hidden md:flex">
            <ButtonLogin />
            <ButtonSignup />
            <ButtonCheckout />
          </div>
        </div>
        {/* console.log('NavPop',NavPop); */}
        {/* <div>mobile menu show here</div> */}
        <div className="md:hidden">{Navpop && <Showmenu />}</div>
        {/* {Navpop && <Showmenu />} */}
        {/*TODO: 下層 */}
        <div className="flex flex-wrap justify-center  items-center h-[30px]  lg:max-w-[1024px] lg:mx-auto  ">
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/");
            }}
          >
            推薦
          </div>
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/America");
            }}
          >
            美式
          </div>
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/Taiwan");
            }}
          >
            台式
          </div>
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/Europe");
            }}
          >
            歐式
          </div>
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/Japan");
            }}
          >
            日式
          </div>
          <div
            className="mx-3 cursor-pointer font-medium hover:text-green-700 hover:scale-110 duration-100"
            onClick={() => {
              go("/Myselect");
            }}
          >
            收藏餐廳
          </div>
        </div>
        {/* <LoginPopup LoginPop={LoginPop} setLoginPop={setLoginPop} /> */}
        {/* <SignupPopup SignupPop={SignupPop} setSignupPop={setSignupPop} /> */}
      </header>
    </>
  );
};

export default Header;
