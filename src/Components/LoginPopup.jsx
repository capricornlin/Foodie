import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPopup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const go = useNavigate();
  const ModalRef = useRef();
  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      props.setLoginPop(false);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    login(email, password)
      .then((res) => {
        toast.success("Signin successfully");
        go("/");
        console.log(res);
        props.setLoginPop(false);
      })
      .catch((error) => {
        console.log("error messages: ", error.message);
      })
      .finally(() => setIsSubmitting(false));
    console.log("email: ", email);
    console.log("password", password);
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
          <form action="" method="POST" onSubmit={SubmitHandler}>
            <div className="mb-8">
              <p className="font-medium text-center text-3xl">Login</p>
              <label htmlFor="email" className=" font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Input your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                id="email"
                required
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
                placeholder="Input your password"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                value={password}
                required
                className="w-full border-2 border-gray-300 h-[50px] px-3 mt-1 rounded-lg focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <div className="text-center my-5 capitalize text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              If you haven't registered yet, please register First
            </div>
            <button
              className="hover:bg-green-900   active:bg-emerald-600 active:ring-4 duration-100 ring-emerald-600 ring-offset-2 w-full mt-4 font-medium rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 py-3 text-lg tracking-wide text-white"
              // onClick={() => props.setLoginPop(false)}
            >
              Login
            </button>
          </form>
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
