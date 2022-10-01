import { Fragment } from "react";
import CartBtn from "../Header/CartBtn/CartBtn";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <h1>
          Foody <span>Restaurant</span>
        </h1>
        <CartBtn />
      </div>
    </Fragment>
  );
};

export default Navbar;
