import classes from "./Checkout.module.scss";

const Checkout = (props) => {


  const submitOrderHandler = event => {
    event.preventDefault();
    console.log(event);
    
  }

  return (
    <form className={classes["form-checkout"]} onSubmit={submitOrderHandler}>
      <div className={classes["input-boxes"]}>
        <div className={classes["input-box"]}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="username" id="name" />
        </div>

        <div className={classes["input-box"]}>
          <label htmlFor="address">Address</label>
          <input type="text" name="useraddress" id="address" />
        </div>

        <div className={classes["input-box"]}>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="usernumber" id="phone" />
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
