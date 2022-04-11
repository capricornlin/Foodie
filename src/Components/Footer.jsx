import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-screen mt-[100px] border-b-2 border-gray-200 p-[60px] flex flex-wrap justify-around">
        <div>
          <h2 className="text-white text-5xl my-4">
            Foo<span className="text-green-700">die</span>
          </h2>
        </div>
        <div className="flex text-white ">
          <div className="mr-6 space-y-2 ">
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">取得協助</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">新增您的餐廳</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">
              註冊成為合作外送夥伴
            </span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">建立企業帳戶</span>
          </div>
          <div className="space-y-2">
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">我附近的美食外送</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">檢視所有城市</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">查看所有國家/地區</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">我附近的自取選項</span>
            <span className="hover:underline hover:decoration-solid block hover:cursor-pointer">關於foodie</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-black w-screen text-white justify-between pb-[50px] pt-6">
        <div className="flex space-x-6 ml-4 hover:cursor-pointer mb-4">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
        <div className="mx-auto md:mx-0">
          <div className="space-x-6 flex md:mr-4">
            <span className="hover:underline hover:decoration-solid hover:cursor-pointer">隱私政策</span>
            <span className="hover:underline hover:decoration-solid hover:cursor-pointer">條款</span>
            <span className="hover:underline hover:decoration-solid hover:cursor-pointer">價格</span>
            <span className="hover:underline hover:decoration-solid hover:cursor-pointer">請勿銷售我的資訊</span>
          </div>
          <div className="text-right mr-4 text-base mt-2">2022 Foodie Technologies Inc</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
