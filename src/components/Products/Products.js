import Categories from "../Categories/Categories";
import ProductItem from './ProductItem/ProductItem';
import classes from './Products.module.scss';
const Products = () => {
  return (
    <div className={classes.products}>
      <Categories />
      <ProductItem></ProductItem>
    </div>
  );
};
export default Products;