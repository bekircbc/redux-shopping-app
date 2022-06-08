import { useSelector } from "react-redux";
import { addCoupon } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const PageCart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="page_cart">
      <h2>Cart</h2>
      <p>There are {items.length} books.</p>
      <div>
        <button onClick={() => dispatch(addCoupon())}>Add Coupon</button>
      </div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.title} - {formatPrice(item.price)} - (discount price:{" "}
              {formatPrice(item.discountedPrice)})
            </li>
          );
        })}
      </ul>
    </div>
  );
};
