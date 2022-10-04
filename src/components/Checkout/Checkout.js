import { useReducer } from "react";
import classes from "./Checkout.module.scss";

const initialInputStates = {
  name: "",
  address: "",
  number: 0,
  isNameValid: false,
  isAddressValid: false,
  isNumberValid: false,
  isNameTouched: false,
  isAddressTouched: false,
  isNumberTouched: false,
};

const inputReducersFn = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.value,
        isNameValid: action.isValueValid,
        isNameTouched: action.isValueTouched,
      };

    case "ADDRESS":
      return {
        ...state,
        address: action.value,
        isAddressValid: action.isValueValid,
        isAddressTouched: action.isValueTouched,
      };

    case "NUMBER":
      return {
        ...state,
        number: action.value,
        isNumberValid: action.isValueValid,
        isNumberTouched: action.isValueTouched,
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
    const isValueTouched = true;
    const value = event.target.value.trim();
    const isValueValid = value.trim() !== "";
    // Dispatch the action
    dispatch({ type: "NAME", value, isValueValid, isValueTouched });
  };

  const onChangeAddressHandler = (event) => {
    // Check Validation: Detailed address
    const isValueTouched = true;
    const value = event.target.value.trim();
    const isValueValid = value.length >= 5;
    // Dispatch the action
    dispatch({ type: "ADDRESS", value, isValueValid, isValueTouched });
  };

  const onChangeNumberHandler = (event) => {
    // Check Validation: value is a number & not empty
    const isValueTouched = true;
    const value = event.target.value.trim();
    const isValueValid = !isNaN(value) && value.length !== 0;
    // Dispatch the action
    dispatch({ type: "NUMBER", value, isValueValid, isValueTouched });
  };

  // FORM SUBMMITION
  const submitOrderHandler = (event) => {
    event.preventDefault();

    if (inputs.isNameValid && inputs.isAddressValid && inputs.isNumberValid)
      // Here we can send user data to backend, there is no problem.
      console.log(inputs);
  };

  // Valid value messages:
  const nameValidation = inputs.isNameTouched && !inputs.isNameValid && (
    <p className={classes.isValid}>Please enter a valid full name.</p>
  );
  const addressValidation = inputs.isAddressTouched &&
    !inputs.isAddressValid && (
      <p className={classes.isValid}>Please enter your address in detail.</p>
    );
  const numberValidation = inputs.isNumberTouched && !inputs.isNumberValid && (
    <p className={classes.isValid}>Please enter a valid phone nubmer.</p>
  );

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
          {nameValidation}
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
          {addressValidation}
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
          {numberValidation}
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
