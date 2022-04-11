import { useRef } from "react";
import { MdOutlineCelebration } from "react-icons/md";

const Checkoutpopup = (props) => {
  const ModalRef = useRef();

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      props.setCheckoutpop(false);
    }
  };
  return props.checkoutpop ? (
    <>
      <div
        //  absolute top-0 left-0 right-0
        className="bg-black/70 w-screen h-screen fixed top-0 flex justify-center lg:items-center"
        ref={ModalRef}
        onClick={closeModal}
      >
        <div className="bg-green-700 h-[200px] w-[90%] rounded-lg flex items-center mt-[500px] lg:mt-0 justify-center lg:w-[500px] ">
          <div>
            <MdOutlineCelebration className="text-white text-4xl mx-2" />
          </div>
          <div className="text-white font-medium text-4xl">感謝定購</div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Checkoutpopup;
