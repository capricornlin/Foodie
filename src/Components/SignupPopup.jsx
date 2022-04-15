import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignupPopup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const go = useNavigate();
  const ModalRef = useRef();
  //TODO: e.target
  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      props.setSignupPop(false);
    }
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    register(email, password)
      .then((res) => {
        toast.success("Register successfully");
        props.setSignupPop(false);
        go("/");
        console.log(res);
      })
      .catch((error) => {
        console.log("error messages: ", error.message);
      })
      .finally(() => setIsSubmitting(false));
    console.log("email: ", email);
    console.log("password", password);
  };

  return props.SignupPop ? (
    <>
      <div
        // absolute top-0 left-0 right-0
        className="absolute top-0 left-0 right-0  w-screen h-screen bg-black/70 flex justify-center items-start"
        ref={ModalRef}
        onClick={closeModal}
      >
        <div className="w-[90%] p-4 bg-white mt-[100px] rounded-lg md:w-[500px]">
          <form action="" method="POST" onSubmit={SubmitHandler}>
            <div className="mb-8">
              <p className="font-medium text-center text-3xl">Signup</p>
              <label htmlFor="email" className=" font-medium">
                Eamil
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="At Least 6 Digits"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                name="password"
                value={password}
                required
                className="w-full border-2 border-gray-300 h-[50px] px-3 mt-1 rounded-lg focus:border-green-700 focus:ring-green-700"
              />
            </div>
            <div className="mb-8">
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
            </div>
            <button
              className="  active:bg-emerald-300 active:ring-4 duration-100 ring-emerald-600 ring-offset-2 w-full mt-4 font-medium rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 py-3 text-lg tracking-wide text-white"
              // onClick={() => props.setSignupPop(false)}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default SignupPopup;
