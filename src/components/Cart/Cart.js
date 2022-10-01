import { createContext, Fragment } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import FoodContext from "../../store/food-context";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const ctx = createContext(FoodContext);

  const mainItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      type={item.type}
      price={item.price}
    />
  ));

  return (
    <Fragment>
      <Modal>
        <ul className={classes['cart-items']}>{mainItems}</ul>
      </Modal>
    </Fragment>
  );
};

export default Cart;
