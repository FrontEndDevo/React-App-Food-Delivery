import { useState } from "react";
import classes from "./AddProduct.module.scss";

const AddProduct = (props) => {
  const [amount, setAmount] = useState("1");

  const changeInputHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = parseInt(amount);

    props.onAddToCart(enteredAmount);
  };


  return (
    <form onSubmit={submitFormHandler} className={classes["add-to-cart"]}>
      <input
        id="amount"
        type="number"
        min="1"
        max="12"
        step="1"
        defaultValue="1"
        onChange={changeInputHandler}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default AddProduct;
