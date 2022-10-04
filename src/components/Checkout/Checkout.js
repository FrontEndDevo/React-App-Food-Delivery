import { useReducer } from "react";
import classes from "./Checkout.module.scss";

const initialInputStates = {
  name: "",
  address: "",
  number: 0,
  isNameValid: false,
  isAddressValid: false,
  isNumberValid: false,
};

const inputReducersFn = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.value, isNameValid: action.isValueValid };

    case "ADDRESS":
      return {
        ...state,
        address: action.value,
        isAddressValid: action.isValueValid,
      };

    case "NUMBER":
      return {
        ...state,
        number: action.value,
        isNumberValid: action.isValueValid,
      };

    default:
      return { ...state };
  }
};

const Checkout = (props) => {
  const [inputs, dispatch] = useReducer(inputReducersFn, initialInputStates);

  // Disable paste in input fields.
  const onCopyAndPasteDisableHandler = (event) => {
    event.preventDefault();
  };

  // Validation & Store input values in our useReducer.
  const onChangeNameHandler = (event) => {
    // Check Validation: name is not empty
    const value = event.target.value.trim();
    const isValueValid = value.trim() !== "";
    // Dispatch the action
    dispatch({ type: "NAME", value, isValueValid });
  };

  const onChangeAddressHandler = (event) => {
    // Check Validation: Detailed address
    const value = event.target.value.trim();
    const isValueValid = value.length >= 5;
    // Dispatch the action
    dispatch({ type: "ADDRESS", value, isValueValid });
  };

  const onChangeNumberHandler = (event) => {
    // Check Validation: value is a number & not empty
    const value = event.target.value.trim();
    const isValueValid = !isNaN(value) && value.length !== 0;
    // Dispatch the action
    dispatch({ type: "NUMBER", value, isValueValid });
  };

  // FORM SUBMMITION
  const submitOrderHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form className={classes["form-checkout"]} onSubmit={submitOrderHandler}>
      <div className={classes["input-boxes"]}>
        <div className={classes["input-box"]}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="username"
            id="name"
            onChange={onChangeNameHandler}
            onPaste={onCopyAndPasteDisableHandler}
            onCopy={onCopyAndPasteDisableHandler}
            onCut={onCopyAndPasteDisableHandler}
            autoComplete="off"
          />
        </div>

        <div className={classes["input-box"]}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="useraddress"
            id="address"
            onChange={onChangeAddressHandler}
            onPaste={onCopyAndPasteDisableHandler}
            onCopy={onCopyAndPasteDisableHandler}
            onCut={onCopyAndPasteDisableHandler}
            autoComplete="off"
          />
        </div>

        <div className={classes["input-box"]}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="usernumber"
            id="phone"
            onChange={onChangeNumberHandler}
            onPaste={onCopyAndPasteDisableHandler}
            onCopy={onCopyAndPasteDisableHandler}
            onCut={onCopyAndPasteDisableHandler}
            autoComplete="off"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.cancel} onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
