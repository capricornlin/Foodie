import { useGetResturantItemsQuery } from "../services/Api";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../slice/ResturantSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Item = ({ id, name, avatar, price, isFollowing, type }) => {
  const go = useNavigate();
  const dispatch = useDispatch();

  function followClickHandler() {
    //TODO: click following button
    console.log("click follow button");
    //console.log(unfollow);
    if (isFollowing) {
      dispatch(unfollow(id));
    } else {
      dispatch(follow(id));
    }
  }

  return (
    <>
      <div className="group shadow-xl hover:shadow-sm duration-300 ease-in w-[300px] mx-5 mt-3 rounded-md overflow-hidden   ">
        <div className="relative overflow-hidden ">
          <img
            className="object-cover h-[300px] group-hover:scale-105 group-hover:duration-700 duration-500 cursor-pointer"
            onClick={() => {
              go(`/${type}/${id}`);
            }}
            src={avatar}
          />
          <div className="absolute top-4 right-4 ">
            <div
              className={`${
                isFollowing ? "text-green-500" : "text-green-500"
              }  text-3xl  cursor-pointer hover:scale-110 duration-200 hover:text-green-400`}
              onClick={followClickHandler}
            >
              {isFollowing ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
          </div>
        </div>

        <div className="text-center font-medium my-4">{name}</div>
        {/* <div className="text-center">$:{price}</div> */}
        {/* <div className="flex justify-center">
          <div
            className={`${
              isFollowing ? "text-green-600" : "text-gray-700"
            }  text-lg font-bold cursor-pointer hover:scale-110 duration-200 hover:text-green-600`}
            onClick={followClickHandler}
          >
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </div>
        </div> */}
      </div>
    </>
  );
};

const ResturantCard = ({ country }) => {
  //const { data, isLoading } = useGetResturantItemsQuery();
  //console.log("data", data);
  //TODO: 是ResturantReducer才對，因為五們是從store裡面的reducer取得的ResturantReducer
  const resturantReducer = useSelector((state) => state.ResturantReducer);
  const resturants = resturantReducer.ResturantItem;

  return (
    <>
      {/* {isLoading && (
        <div className="flex justify-center mt-20 ">
          <Loading />
        </div>
      )} */}

      {/* {!isLoading && (
        <div className="flex flex-wrap">
          {data?.map((item) => {
            const { id, name, avatar, price } = item;
            return <Item id={id} name={name} avatar={avatar} price={price} />;
          })}
        </div>
      )} */}
      <div className="flex flex-wrap">
        {resturants?.map((item) => {
          const { id, name, avatar, price, isFollowing, type } = item;
          if (type === country) {
            return (
              <div key={id}>
                <Item id={id} name={name} avatar={avatar} price={price} isFollowing={isFollowing} type={type} />
              </div>
            );
          } else if (country === "all") {
            return (
              <div key={id}>
                <Item id={id} name={name} avatar={avatar} price={price} isFollowing={isFollowing} type={type} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default ResturantCard;
