import Header from "../../Components/Header";
import { DishItem } from "../../Components/Dishitem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Checkoutpopup from "./Component/popup/Checkoutpopup";
import { useDispatch, useSelector } from "react-redux";
import { reload } from "../../slice/ItemSlice";
import DifferentResturant from "./Component/DifferentResturant";
import Footer from "../../Components/Footer";

const Checkout = () => {
  const itemReducer = useSelector((state) => state.ItemReducer);
  const items = itemReducer.Item;
  const go = useNavigate();
  let all = 0;
  const [checkoutpop, setCheckoutpop] = useState(false);

  const dispatch = useDispatch();

  function click() {
    setCheckoutpop(true);
    dispatch(reload());
  }
  const menuItems = new Set();
  //TODO: 兩種資料型態 店名array 和DishItem 是不是要傳到另一個page去完成？
  for (let i = 0; i < items.length; i++) {
    const { price, number, resturant } = items[i];
    if (number >= 1 && !menuItems.has(resturant)) {
      menuItems.add(resturant);
    }
    all += price * number;
  }
  const arrMenu = Array.from(menuItems);

  console.log("arrMenu", arrMenu);

  return (
    <>
      {/* <Header /> */}

      <div className="relative min-h-screen">
        <div>
          <div
            className="font-semibold text-green-700 text-3xl cursor-pointer hover:text-green-900 m-5 mt-0 "
            onClick={() => {
              go("/");
            }}
          >
            Foodie
          </div>
        </div>

        <div className="flex flex-wrap justify-around ">
          {/* flex- 0 1 auto */}
          {/*TODO: 左側 */}

          <div className="m-3 basis-[625px]">
            {arrMenu.map((item) => {
              return (
                <div key={item}>
                  <h1 className="text-green-700 font-medium text-2xl border-b-2 border-gray-100 mb-2 pb-2">{item}</h1>
                  <DifferentResturant resturantName={item} />
                </div>
              );
            })}

            <div className="m-6"></div>
          </div>
          {/*TODO: right */}
          <div className="bg-gray-200 h-[500px] 2xl:h-screen basis-[399px] ">
            <div
              className="font-medium bg-green-700 hover:bg-green-900 hover:scale-105 hover:duration-1000 rounded-md w-[350px] p-5 text-white  text-center mt-[50px] cursor-pointer mx-auto active:bg-green-900 active:ring-4 ring-green-900 ring-offset-2 active:duration-100"
              onClick={() => {
                click();
              }}
            >
              一鍵下訂
            </div>
            <div className="text-xs text-gray-500 w-[350px] mx-auto mt-3">
              條款： 按一下按鈕送出訂單，即表示您確認已詳閱隱私政策，並且同意 Foodie 的 使用條款
            </div>
            <div className="text-xs text-gray-500 w-[350px] mx-auto mt-3 pb-5 border-b-2 border-gray-300">
              若合作外送夥伴抵達時您不在附近，他們會把訂單放在門口。送出訂單即表示您同意在訂單送達後承擔全部責任。
            </div>
            <div className="flex justify-around mt-5">
              <div>小記</div>
              <div>${all}</div>
            </div>
            <div className="flex justify-around mt-5  ">
              <div>外送費</div>
              <div>$60 * {arrMenu.length}</div>
            </div>

            <div className="flex justify-around mt-5 ">
              <div className="font-medium text-lg">總計</div>
              <div>${(all += 60 * arrMenu.length)}</div>
            </div>
          </div>
        </div>
        <Checkoutpopup checkoutpop={checkoutpop} setCheckoutpop={setCheckoutpop} />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
