import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import FoodContext from "../../store/food-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const ctx = useContext(FoodContext);

  const totalPrice = `$${parseFloat(ctx.totalPrice).toFixed(2)}`;

  const mainItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
      ))}
    </ul>
  );
  
  return (
      <Modal onClose={props.onClose}>
        <div className={classes["cart-content"]}>
          {mainItems}
          <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </Modal>
  );
};

export default Cart;
