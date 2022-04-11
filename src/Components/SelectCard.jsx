import { Item } from "./ResturantCard";
import { useDispatch, useSelector } from "react-redux";

const SelectCard = () => {
  const resturantReducer = useSelector((state) => state.ResturantReducer);
  const resturants = resturantReducer.ResturantItem;

  return (
    <>
      <div className="flex flex-wrap">
        {resturants?.map((item) => {
          const { id, name, avatar, price, isFollowing, type } = item;

          return (
            <>
              {isFollowing && (
                <div key={id}>
                  <Item id={id} name={name} avatar={avatar} price={price} isFollowing={isFollowing} type={type} />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default SelectCard;
