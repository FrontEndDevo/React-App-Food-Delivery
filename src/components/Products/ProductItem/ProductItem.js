import { useContext } from "react";
import AddProduct from "../AddProduct/AddProduct";
import FoodContext from "../../../store/food-context";
import classes from "./ProductItem.module.scss";

const ProductItem = (props) => {
  const ctx = useContext(FoodContext);

  const totalAmount = ctx.totalPrice

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  const price = `$${props.price}`;

  return (
    <li className={classes["food-box"]}>
      <div className={classes["food-info"]}>
        <h4>{props.name}</h4>
        <h6>{props.type}</h6>
        <span>{price}</span>
      </div>

      <AddProduct onAddToCart={addToCartHandler} />
    </li>
  );
};

export default ProductItem;
