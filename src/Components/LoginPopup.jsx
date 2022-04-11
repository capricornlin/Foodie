import { useRef } from "react";

const LoginPopup = (props) => {
  // function ClickHandler() {
  //   setLoginPop(false);
  //   setSignupPop(true);
  // }
  const ModalRef = useRef();
  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      props.setLoginPop(false);
    }
  };

  return props.LoginPop ? (
    // return LoginPop ? (
    <>
      <div
        // absolute top-0 left-0 right-0
        className="absolute top-0 left-0 right-0  w-screen h-screen bg-black/70 flex justify-center items-start duration-100"
        ref={ModalRef}
        onClick={closeModal}
      >
        <div className="w-[90%] p-4 bg-white mt-[100px] rounded-lg md:w-[500px]">
          <div className="mb-8">
            <p className="font-medium text-center text-3xl">Login</p>
            <label htmlFor="username" className=" font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full border-2 border-gray-300 h-[50px] px-3 mt-1 rounded-lg focus:border-green-700 focus:ring-green-700"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border-2 border-gray-300 h-[50px] px-3 mt-1 rounded-lg focus:border-green-700 focus:ring-green-700"
            />
          </div>
          {/* <div className="mb-8">
            <label htmlFor="region" className=" font-medium">
              Region
            </label>
            <select
              name="region"
              id=""
              className="w-full border-2 border-gray-300 h-[50px] px-3 mt-1 rounded-lg focus:border-green-700 focus:ring-green-700"
            >
              <option value="TW">Taiwan</option>
              <option value="SG">Singapore</option>
              <option value="JP">Japan</option>
              <option value="US">United States</option>
            </select>
          </div> */}
          <div className="mb-8 flex items-center">
            <input type="checkbox" name="checkbox" id="" className="mr-2 text-green-700 focus:ring-green-700" />
            <label htmlFor="checkbox" className=" font-medium">
              Remember my password
            </label>
          </div>
          {/* <button
            className="hover:bg-green-900   active:bg-green-900 active:ring-2 duration-100 ring-green-900 ring-offset-2 w-full mt-4 font-medium rounded-lg bg-green-700 py-3 text-lg tracking-wide text-white"
            onClick={ClickHandler}
          >
            SignUp
          </button> */}
          <button
            className="hover:bg-green-900   active:bg-green-900 active:ring-2 duration-100 ring-green-900 ring-offset-2 w-full mt-4 font-medium rounded-lg bg-green-700 py-3 text-lg tracking-wide text-white"
            onClick={() => props.setLoginPop(false)}
            // onClick={() => setLoginPop(false)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default LoginPopup;

//   <div className=" absolute top-0 left-0 right-0 w-screen h-screen bg-black/70 flex justify-center items-start">
//   <div className="w-[90%] p-4 bg-white mt-[100px] rounded-lg">
//     <p>標題</p>
//     <p>內容</p>
//     <button className="w-full mt-4 rounded-lg bg-green-700 py-3 text-lg tracking-wide text-white">關閉</button>
//   </div>
// </div>;
