import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

export const ShopArea = () => {
  const { customerName } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="page_shopArea">
      {customerName !== "" ? (
        <h2>{customerName}'s Shop</h2>
      ) : (
        <h2>General Shop</h2>
      )}
      <button onClick={() => dispatch(removeItem())}>remove item</button>
      <button
        onClick={() =>
          dispatch({
            type: "cart/addItem",
            payload: { title: "Node.js Cookbook", price: 23.99 },
          })
        }
      >
        Node.js Cookbook
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "cart/addItem",
            payload: {
              title: "Building Microservices",
              price: 26.5,
            },
          })
        }
      >
        Building Microservices
      </button>
    </div>
  );
};
