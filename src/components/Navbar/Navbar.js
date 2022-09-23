import { Fragment } from "react";
import Cart from "../Cart/Cart";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.navbar}>
      <p>Search</p>
          <Cart />
      </div>
    </Fragment>
  );
};

export default Navbar;
