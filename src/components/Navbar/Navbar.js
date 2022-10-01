import { Fragment } from "react";
import CartBtn from "../Header/CartBtn/CartBtn";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <h1>
          Foody <span>Restaurant</span>
        </h1>
        <CartBtn onClickCart={props.onShow} />
      </div>
    </Fragment>
  );
};

export default Navbar;
