import { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import FoodContext from "../../store/food-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = (props) => {
  const ctx = useContext(FoodContext);
  const isCtxHave = ctx.items.length !== 0;
  // To know when the order btn should display.
  const [order, setOrder] = useState(false);

  const orderFoodHandler = () => {
    setOrder(true);
  };

  const onCancelOrder = () => {
    setOrder(false);
  };

  const totalPrice = `$${parseFloat(ctx.totalPrice).toFixed(2)}`;

  const onAddItemHandler = (item) => {
    ctx.addItem(item);
  };
  const onRemoveItemHandler = (id) => {
    ctx.deleteItem(id);
  };

  const mainItems = (
    <ul>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddItemHandler.bind(null, item)}
          onRemove={onRemoveItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-content"]}>
        {mainItems}
        <div className={classes.details}>
          <div className={classes.total}>
            <span>Total Amount :</span>
            <span className={classes["total-price"]}>{totalPrice}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes.close} onClick={props.onClose}>
              Close
            </button>
            {isCtxHave && (
              <button className={classes.order} onClick={orderFoodHandler}>
                Order
              </button>
            )}
          </div>
        </div>
        {order && <Checkout onCancel={onCancelOrder} />}
      </div>
    </Modal>
  );
};

export default Cart;
