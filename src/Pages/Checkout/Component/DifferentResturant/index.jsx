import { useSelector } from "react-redux";
import DishItem from "../../../../Components/Dishitem";

const Different = ({ resturantName }) => {
  const itemReducer = useSelector((state) => state.ItemReducer);
  const items = itemReducer.Item;
  return (
    <>
      {/* <div className="m-3 basis-[936px]"> */}
      <div className="flex flex-wrap">
        {items.map((item) => {
          //id, name, avatar, price, number
          const { price, number, avatar, name, id, resturant } = item;

          if (number >= 1 && resturant === resturantName) {
            return (
              <div key={id}>
                <DishItem id={id} name={name} avatar={avatar} price={price} number={number} resturant={resturant} />
              </div>
            );
          }
        })}
      </div>

      <div className="m-6"></div>
      {/* </div> */}
    </>
  );
};

export default Different;
