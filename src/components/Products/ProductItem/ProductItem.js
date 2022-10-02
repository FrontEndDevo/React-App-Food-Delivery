import { useContext } from "react";
import AddProduct from "../AddProduct/AddProduct";
import FoodContext from "../../../store/food-context";
import classes from "./ProductItem.module.scss";

const ProductItem = (props) => {
  const ctx = useContext(FoodContext);
    console.log(ctx);
  // Finally add the item to cart.
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount,
    });
  };

  const price = `$${parseFloat(props.price).toFixed(2)}`;

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
