import styles from "./ProductItem.module.scss";
import fruitIcon from "../../../assets/Images/f10.png";
import cartIcon from "../../../assets/Images/cart.png";
const ProductItem = () => {
  return (
    <div className={styles.product}>
      <div className={styles["produt-items"]}>
        <img src={fruitIcon} alt="" />
        <div className={styles["product-card"]}>
          <img src={cartIcon} alt="" />
          <div className={styles["product-info"]}>
            <h4>strawberry</h4>
            <p>$ 10.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
