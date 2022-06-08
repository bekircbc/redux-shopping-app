import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {
  const { items, customerName, coupon } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="page_shoppingCart">
      <h2>Shopping Cart</h2>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "cart/addCustomerName",
              payload: "Henri",
            })
          }
        >
          Add Customer Name
        </button>{" "}
        {customerName}
      </div>
      <div>
        <button onClick={() => dispatch({ type: "cart/addCoupon" })}>
          Add Coupon
        </button>{" "}
        {coupon ? "COUPON IS ACTIVE" : "(no coupon)"}
      </div>
      <div>items in cart: {items.length}</div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.title} - {formatPrice(item.price)} (discounted:{" "}
              {formatPrice(item.discountedPrice)})
            </li>
          );
        })}
      </ul>
    </div>
  );
};
