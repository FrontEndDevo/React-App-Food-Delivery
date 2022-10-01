import { createContext, Fragment } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import FoodContext from "../../store/food-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const ctx = createContext(FoodContext);
  
  console.log(ctx.items);

  const totalPrice = `$${ctx.totalPrice.toFixed(2)}`;

  const mainItems = ctx.items
    ? ctx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))
    : [];

  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        <div className={classes["cart-content"]}>
          <ul className={classes["cart-items"]}>{mainItems}</ul>
          <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
