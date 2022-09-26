import styles from "./ProductItem.module.scss";
import FoodIcon from "../../../assets/Images/food.png";
import cartIcon from "../../../assets/Images/cart.png";
const ProductItem = () => {
  return (
    <div className={styles.product}>
      <div className={styles["produt-items"]}>
        <img src={FoodIcon} alt="" />
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
