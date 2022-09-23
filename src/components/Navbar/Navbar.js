import { Fragment } from "react";
import Cart from "../Cart/Cart";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <h1>Foody</h1>
        <Cart />
      </div>
    </Fragment>
  );
};

export default Navbar;
