import classes from './Checkout.module.scss';

const Checkout = () => {
  return (
    <form className={classes['form-checkout']}>
      <div className={classes['input-box']}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="username" id="name" />
      </div>

      <div className={classes['input-box']}>
        <label htmlFor="address">Address</label>
        <input type="text" name="useraddress" id="address" />
      </div>

      <div className={classes['input-box']}>
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="usernumber" id="phone" />
      </div>
    </form>
  );
}

export default Checkout