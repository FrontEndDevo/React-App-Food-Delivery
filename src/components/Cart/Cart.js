import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import FoodContext from "../../store/food-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const ctx = useContext(FoodContext);

  const totalPrice = `$${parseFloat(ctx.totalPrice).toFixed(2)}`;

  const onAddItemHandler = (item) => {
    ctx.addItem(item);
  };
  const onRemoveItemHandler = (id) => {
    ctx.deleteItem(id)
  }
  
  const mainItems = (
    <ul>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddItemHandler.bind(null,item)}
          onRemove={onRemoveItemHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  
  return (
      <Modal onClose={props.onClose}>
        <div className={classes["cart-content"]}>
          {mainItems}
          <div className={classes.total}>
            <span>Total Amount :</span>
            <span className={classes['total-price']}>{totalPrice}</span>
          </div>
        </div>
      </Modal>
  );
};

export default Cart;
