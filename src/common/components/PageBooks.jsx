import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";

export const PageBooks = () => {
  const dispatch = useDispatch();
  const { customerName } = useSelector((state) => state.cart);

  return (
    <div className="page_books">
      {customerName !== "" ? <h2>Books for {customerName}</h2> : <h2>Books</h2>}
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
              price: 29.99,
            },
          })
        }
      >
        Building Microservices
      </button>
      <button onClick={() => dispatch(removeItem())}>Remove book</button>
    </div>
  );
};
