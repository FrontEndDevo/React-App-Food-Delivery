import Categories from "../Categories/Categories";
import classes from "./Products.module.scss";
const Products = () => {
  return (
    <div className={classes.products}>
      <Categories />
    </div>
  );
};
export default Products;
